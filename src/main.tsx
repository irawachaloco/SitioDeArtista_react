import * as React from "react";
import * as ReactDOM from "react-dom";
import {NavigationBar} from "./navigationBar";

interface HelloProps { compiler: string; framework: string; }
interface Punto { x: number; y: number; }

const p: Punto = {
    x: 2,
    y: 0
};

const Hello = (props: HelloProps) => <h1>Goodbye from {props.compiler} and {props.framework}!</h1>;
const Content = () => <div>
                        <NavigationBar/>
                        <Hello compiler="TypeScript" framework="React" />
                     </div>;

ReactDOM.render(
    <Content/>,
    document.getElementById("app")
);