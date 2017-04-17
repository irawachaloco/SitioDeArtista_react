import {Observable, ReplaySubject, Subject} from 'rxjs';

export type Action<S> = (state: S) => S

export class Store<S> { // Should this be renamed as StoreSubject?
    private state: Observable<S>;
    private actions: Subject<Action<S>>;

    constructor (initialState: S, signals: Observable<Action<S>>[] = []) {
        this.actions = new Subject();
        this.state = Observable.prototype.merge.apply(Observable.of((s:S) => s), signals)
            .merge(Observable.never())
            .merge(this.actions)
            .scan((state:S, action: Action<S>) => action(state), initialState)
            .multicast(new ReplaySubject(1)).refCount();
    }

    merge: (signal: Observable<Action<S>>) => void = signal => { signal.subscribe( n => this.actions.next(n)); };

    apply: (action: Action<S>) => void = action => { this.actions.next(action); };

    asObservable: () => Observable<S> = () => this.state;
}
