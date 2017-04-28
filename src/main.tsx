import * as React from "react";
import * as ReactDOM from "react-dom";
import { Subject} from "rxjs";
import "./style.styl";
import {ReactiveNavBar} from "./navigation/navigationBar";
import {Content} from "./content";
import { initialState, changeSection, updateNews, updateWorks } from "./models/appState";
import {Store} from "./store";
import { client } from "./client";

/**
 * Nota sobre el sistema de módulos.
 *
 * En TypeScript cada archivo es considerado un "módulo" y puede ser "importado" o referenciado desde otro módulo
 * mediante la instrucción `import {object_name} from "module_name"`. Aquí, object_name es el nombre de uno de los
 * elementos exportados en el módulo referido.
 */

const sectionStream = new Subject<string>();
const sectionActionStream = sectionStream.map(changeSection);

const newsStream = client.news().map(updateNews);
const worksStream = client.works().map(updateWorks);

// Vamos a usar un Store para controlar nuestro estado
const store = new Store(initialState, [
    sectionActionStream,
    newsStream,
    worksStream
]);

const state = store.asObservable();

const Main = () =>
    <div>
        <ReactiveNavBar 
            navigationAction={s => {sectionStream.next(s)}}
            initialState={initialState.selectedSection}
            stream={state.map(s => s.selectedSection)} />
        <Content
            initialState={initialState}
            stream={state} />
    </div>;

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
);