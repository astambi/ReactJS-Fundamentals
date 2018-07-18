import React, { Component } from "react";

const WithWarningStyle = WrappedComponent =>
    class WithWarning extends Component {
        render = () => (
            <div className="alert">
                <span className="alert-symbol">&#9888;</span>
                <WrappedComponent />
            </div>
        );
    };

export default WithWarningStyle;
