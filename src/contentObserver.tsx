import * as React from "react";
import * as rx from "rxjs";

interface IContentState<T> { data: T }
interface IContentObserverProps<T> { stream: rx.Observable<T>, initialState: T }

export class ContentObserver<T> extends React.Component<IContentObserverProps<T>, IContentState<T>> {
  constructor(props:IContentObserverProps<T>) {
    super();
    this.state = {
      data: props.initialState,
    };

    props.stream
      .subscribe(
        next => {
          this.setState((prevState) => ({
            data: next
          }));
          console.log(next);
        },
        error => {
          console.log('error', error);
        },
        () => {
          console.log('complete');
        }
      );
  }
  render() {
      return (
        <div>{this.state.data.toString()}</div>
        );
    }
}

