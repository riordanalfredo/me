//Bootstrap Form
import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; // Button from Bootstrap
import {MyButton} from '../components/MyButton/MyButton.js';

const FieldGroup = ({ id, label, help, ...props }) =>
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>;

export class MyForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this); //Bind the value
        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <form className={"hide"}>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    bsSize="lg"
                >
                    <ControlLabel>Your Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="ex. Riordan D Alfredo"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>

                <FieldGroup
                    id="formControlsEmail"
                    type="text"
                    label="Email Address"
                    placeholder="ex. abc@abc.com"
                    bsSize="lg"
                />
                <FormGroup controlId="formControlsSelect" bsSize="lg">
                    <ControlLabel>Occasion</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select" defaultValue disabled >Choose one...</option>
                        <option value="hire">Hire me!</option>
                        <option value="project">Project Discussion</option>
                        <option value="appreciation">Project Appreciation</option>
                        <option value="other">Other...</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea" bsSize="lg">
                    <ControlLabel>Message</ControlLabel>
                    <FormControl componentClass="textarea"  />
                </FormGroup>

                <MyButton type="submit" bsStyle="warning" bsSize="lg" block >Submit</MyButton>
            </form>
        );
    }
}
