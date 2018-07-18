import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WithWarningStyle from "../../helpers/WithWarningStyle";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <header>
                    <span className="title">Navigation</span>
                </header>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

const NavWithWarningStyle = WithWarningStyle(Nav);
export { NavWithWarningStyle };
