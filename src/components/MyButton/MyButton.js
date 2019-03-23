
//Button
import React, { Component } from 'react';
import {bootstrapUtils} from "react-bootstrap/lib/utils";
import {Button} from "react-bootstrap";
import styling from "./MyButton.css";

bootstrapUtils.addStyle(Button, 'custom');
export class MyButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            size: "300px",
            isLoading: false,
            styling
        };
    }

    handleClick() {
        this.setState({ isLoading: true });

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({ isLoading: false });
        }, 2000);
    }

    render() {
        const { isLoading} = this.state;
        const {text, link, download, extraText} = this.props;
        return (
            <a href={require("../MyResume/resume.pdf")} download="resume.pdf">
                <Button
                    bsStyle="custom"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleClick : null}
                    bsSize={"lg"}
                >
                    {isLoading ? text.toLowerCase()+'ing...' : text}
                    {isLoading ? null : extraText}
                </Button>
            </a>
        );
    }
}