import * as React from "react";
import * as ReactDOM from "react-dom";
import {Observable, Subject} from "rxjs";
import "./style.styl";
//En typescript un módulo es un archivo u una biblioteca, aquí usamos sitema de módulos:
import {NavigationBar} from "./navigationBar";
import {Content} from "./content";
import {Works} from "./works";
import {ContentObserver} from "./contentObserver";

class SectionObserver extends ContentObserver<string>{}


var currentSection = "home";

const action = (s:string) => {section.next(s)};

//un 'Subject' es observable –se puede ver, saca cosas– y observador –por el que entran las cosas– al mismo tiempo.
const section = new Subject();

const Main = () =>  <div>
                        <NavigationBar navigationAction={action}/>
                        <div>{currentSection}</div>
                        <SectionObserver initialState={currentSection} stream={section}/>
                        <Content/>
                        <Works/>
                    </div>;

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
);