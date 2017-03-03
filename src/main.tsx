import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.styl";
//En typescript un módulo es un archivo u una biblioteca, aquí usamos sitema de módulos:
import {NavigationBar} from "./navigationBar";
import {Content} from "./content";

const Main = () =>  <div>
                        <NavigationBar/>
                        <Content/>
                    </div>;

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
);