import React, { Component } from "react";
import { ArticleWithWarningStyle } from "./Article";
import { RegisterWithWarningStyle } from "./Register";
import { NavWithWarningStyle } from "./Nav";

export default class WarningStylePage extends Component {
    render() {
        return (
            <section>
                <ArticleWithWarningStyle />
                <RegisterWithWarningStyle />
                <NavWithWarningStyle />
            </section>
        );
    }
}
