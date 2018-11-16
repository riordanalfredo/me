
//Button
import React, { Component } from 'react';
import {bootstrapUtils} from "react-bootstrap/lib/utils";
import {Button} from "react-bootstrap";

bootstrapUtils.addStyle(Button, 'custom');
export class MyButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false
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
        const { isLoading } = this.state;
        return (
            <Button
                bsStyle="custom"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}
                bsSize={"lg"}
                block
            >
                {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
        );
    }
}