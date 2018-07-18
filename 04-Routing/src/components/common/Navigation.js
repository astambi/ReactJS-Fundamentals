import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/menu.css";

const Navigation = () => {
    if (!sessionStorage.getItem("authtoken")) {
        return null;
    }

    return (
        <div id="menu">
            <div className="title">Navigation</div>
            <NavLink
                to="/posts/catalog"
                className="nav"
                activeClassName="active"
            >
                Catalog
            </NavLink>
            <NavLink
                to="/posts/create"
                className="nav"
                activeClassName="active"
            >
                Create Post
            </NavLink>
            <NavLink to="/posts/my" className="nav" activeClassName="active">
                My Posts
            </NavLink>
            <NavLink to="/about" className="nav" activeClassName="active">
                About
            </NavLink>
        </div>
    );
};

export default Navigation;
