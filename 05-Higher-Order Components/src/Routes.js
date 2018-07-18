import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import WarningStylePage from "./components/withWarningStyle/WarningStylePage";
import NormalStylePage from "./components/withWarningStyle/NormalStylePage";
import BoundFormPage from "./components/boundForm/BoundFormPage";
import ItemsList from "./components/errorNotification/ItemsList";

const Routes = () => (
    <Switch>
        <Route path="/warningStyle" component={WarningStylePage} />
        <Route path="/normalStyle" component={NormalStylePage} />
        <Route path="/managedForm" component={BoundFormPage} />
        <Route path="/errorNotification" component={ItemsList} />

        <Route component={HomePage} />
    </Switch>
);

export default Routes;
