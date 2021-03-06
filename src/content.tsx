import * as React from "react";
import * as rx from "rxjs";
import { client } from './client';
import { IContentObserverProps, ContentObserver } from "./contentObserver";
import { NewsContent} from "./news"
import { WorksContent } from "./works"
import { AuthorsContent } from "./authors"
import { IAppState } from "./models/appState";

// Aquí estamos extendiendo el control
// para que acepte 'Observables':
interface IReactContentProps extends IContentObserverProps<IAppState> {}

export class Content extends ContentObserver<IAppState, IReactContentProps> {
    constructor (props: IReactContentProps) {
        super(props);
    }
    render () {
        if(this.state.data.selectedSection === 'home'){
            return <NewsContent news={this.state.data.news}  />;
        } else if (this.state.data.selectedSection === 'works') {
            return <WorksContent works={this.state.data.works}  />;
        } else if (this.state.data.selectedSection === 'authorsList') {
            return <AuthorsContent authors={this.state.data.authors}  />;
        }
        
    }
}

