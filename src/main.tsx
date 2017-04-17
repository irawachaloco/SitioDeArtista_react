import * as React from "react";
import * as ReactDOM from "react-dom";
import {Observable, BehaviorSubject, Subject} from "rxjs";
import "./style.styl";
import {ReactiveNavBar} from "./navigation/navigationBar";
import {Content} from "./content";
import {Works} from "./works";
import {IAppState} from "./models/appState";
import {Store} from "./store";

/**
 * Nota sobre el sistema de módulos.
 *
 * En TypeScript cada archivo es considerado un "módulo" y puede ser "importado" o referenciado desde otro módulo
 * mediante la instrucción `import {object_name} from "module_name"`. Aquí, object_name es el nombre de uno de los
 * elementos exportados en el módulo referido.
 */

const initialState: IAppState = {
    selectedSection: 'home',
    works: [],
    news: []
};

const sectionStream = new Subject<string>();
const changeSection = (section: string) =>
    (s: IAppState) => ({selectedSection: section, works: s.works, news: s.news} as IAppState);

// Vamos a usar un Store para controlar nuestro estado
const store = new Store(initialState, [
    sectionStream.map(changeSection)
]);

const state = store.asObservable();

const Main = () =>  <div>
                        <ReactiveNavBar navigationAction={s => {sectionStream.next(s)}} initialState={initialState.selectedSection} stream={state.map(s => s.selectedSection)} />
                        <Content/>
                        <Works/>
                    </div>;

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
);