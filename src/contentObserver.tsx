import * as React from 'react';
import * as rx from 'rxjs';
import {Observable} from "rxjs";

interface IContentState<T> {
    data: T
}

export interface IContentObserverProps<T> {
    stream: rx.Observable<T>,
    initialState: T
}
/**
 * ContentObserver
 * ===============
 *
 * Component that accepts as a property an Observable of type T and automatically subscribes to it and renders
 * underlying components with the resulting emissions.
 *
 * It is supposed to be extended, for example, lets suppose we want to create a Label that reacts to a stream of strings:
 *
 *    class StreamedLabel extends ContentObserver<string> {
 *        render () {
 *            return <div>{this.state.data}</div>;
 *        }
 *    }
 *
 * Now we can use or new StreamedLabel as:
 *
 *    <StreamedLabel initialState="hello" stream={Observable.of("world")} />
 *
 **/
export class ContentObserver<T, P extends IContentObserverProps<T>> extends React.Component<P, IContentState<T>> {
    stream: Observable<T>;
    constructor(props:IContentObserverProps<T>) {
        // We need to call the base constructor in React.Component to initialize an instance
        super();
        // We set the state to the initial state provided as a property
        this.state = { data: props.initialState };
        this.stream = props.stream;
    }
    // We only want to subscribe to the stream if the component is mounted.
    componentDidMount() {
        // We want to subscribe to the provided observer in order to react to its emissions.
        this.stream
            .subscribe(
                next => {
                    this.setState((prevState: T) => ({ data: next }));
                },
                error => {
                    console.log('error', error);
                },
                () => {
                    //console.log('complete');
                }
            );
    }
    // Default implementation in case implementers don't provide one
    render() { return (<div>{this.state.data.toString()}</div>); }
}

