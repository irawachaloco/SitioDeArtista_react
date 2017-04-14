import * as React from "react";
interface MenuBtnProps {
    label: string;
    section: string;
    navigationAction: (a:string) => void;
}
interface NavigationProps {
    //con ':string' le digo que es una cadena    
    //con 'void' le estoy diciendo que no devuelve nada
    navigationAction: (a:string) => void;
}
// A esto se le llama 'control'
const MenuBtn = (props: MenuBtnProps) =>  <div onClick={() => {props.navigationAction(props.section)}} className="menu-btn">{props.label}</div>;

export const NavigationBar = (props:NavigationProps) =>  
    <div className="fixed-menu full-width">
        <div className="content-box-1200">
            <div className="menu border-bottom padding-1">
                <MenuBtn label="Home" section="home" navigationAction={props.navigationAction}/>
                <MenuBtn label="Works" section="works" navigationAction={props.navigationAction}/>
            </div>
        </div>
    </div>;