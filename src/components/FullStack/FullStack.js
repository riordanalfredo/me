import React, {Component} from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import stackStyle from './FullStack.module.css';

export class FullStack extends Component{
    render(){
        return(
            <Grid className={stackStyle.gridStack}>
                <Row >
                    <Col xs={6}>
                        <StackCard label={"MongoDB"} logo={"fas fa-database"}/>
                    </Col>
                    <Col xs={6}>
                        <StackCard label={"ExpressJS"} logo={"fab fa-node-js"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <StackCard label={"NodeJS"} logo={"fab fa-node-js"} />
                    </Col>
                    <Col xs={6}>
                        <StackCard label={"React"} logo={"fab fa-react"}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const StackCard = ({label, logo}) =>
    <div className={stackStyle.columnStack}>
        <i className={logo}/>
        <p>{label}</p>
    </div>;