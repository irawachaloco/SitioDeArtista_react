import * as React from "react";
import * as rx from "rxjs";
import { client } from './client';
import { IContentObserverProps, ContentObserver } from "./contentObserver";
import { NewsContent} from "./news"
import { WorksContent } from "./works"
import { IAppState } from "./models/appState";

// Ahora vamos a extender nuestro control y lo vamos a convertir en un control que acepta Observables:
interface IReactContentProps extends IContentObserverProps<IAppState> {}
export class Content extends ContentObserver<IAppState, IReactContentProps> {
    constructor (props: IReactContentProps) {
        super(props);
    }
    render () {
        if(this.state.data.selectedSection === 'home'){
          return <NewsContent news={this.state.data.news}  />;
        } else {
          return <WorksContent works={this.state.data.works}  />;
        }
        
    }
}

