import * as React from "react";
interface MenuBtnProps {
    label: string;
}
// A esto se le llama 'control'
const MenuBtn = (props: MenuBtnProps) =>  <div className="menu-btn">{props.label}</div>;

export const NavigationBar = () =>  
    <div className="fixed-menu full-width">
        <div className="content-box-1200">
            <div className="menu border-bottom padding-1">
                <MenuBtn label="Home"/>
                <MenuBtn label="Gallery"/>
                <MenuBtn label="About"/>
                <MenuBtn label="Contact"/>
            </div>
        </div>
    </div>;