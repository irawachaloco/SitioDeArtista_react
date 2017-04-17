import * as React from 'react';
import {ContentObserver, IContentObserverProps} from "../contentObserver";
import {Observable} from "rxjs";

interface MenuBtnProps {
    label: string;
    section: string;
    selectedSection: string;
    navigationAction: (a: string) => void;
}

const menuBtnClass = (props: MenuBtnProps) =>
    props.selectedSection === props.section ? 'menu-btn menu-btn-selected' : 'menu-btn';

// A esto se le llama 'control'
const MenuBtn = (props: MenuBtnProps) =>
    <div onClick={() => { props.navigationAction(props.section) }} className={menuBtnClass(props)}>
        {props.label}
    </div>;

/**
 * Nuestro control NavigationBar es muy simple. Requiere una acción y un estado:
 *
 * navigationAction: (a: string) => void
 * selectedSection: string
 */
interface NavigationProps {
    // la acción es una función que recibe una cadena y no devuelve nada
    navigationAction: (a: string) => void;
    selectedSection: string;
}
export const NavigationBar = (props: NavigationProps) =>
    <div className="fixed-menu full-width">
        <div className="content-box-1200">
            <div className="menu border-bottom padding-1">
                <MenuBtn label="Home" section="home" navigationAction={props.navigationAction} selectedSection={props.selectedSection} />
                <MenuBtn label="Works" section="works" navigationAction={props.navigationAction} selectedSection={props.selectedSection} />
            </div>
        </div>
    </div>;

// Ahora vamos a extender nuestro control y lo vamos a convertir en un control que acepta Observables:
interface IReactiveNavBarProps extends IContentObserverProps<string> {
    navigationAction: (a: string) => void;
}
export class ReactiveNavBar extends ContentObserver<string, IReactiveNavBarProps> {
    navigationAction: (a: string) => void;
    constructor (props: IReactiveNavBarProps) {
        super(props);
        this.navigationAction = props.navigationAction;
    }
    render () {
        return <NavigationBar navigationAction={this.navigationAction} selectedSection={this.state.data} />;
    }
}