import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Logout from "./components/user/Logout";
import Catalog from "./components/posts/Catalog";
import CreatePostForm from "./components/posts/CreatePostForm";
import MyPosts from "./components/posts/MyPosts";

const Routes = () => (
    <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/logout" component={Logout} />

        <Route path="/posts/catalog" component={Catalog} />
        <Route path="/posts/create" component={CreatePostForm} />
        <Route path="/posts/my" component={MyPosts} />

        <Route component={HomePage} />
    </Switch>
);

export default Routes;
