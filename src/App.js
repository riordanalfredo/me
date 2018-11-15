import React, { Component } from 'react';
import logo from './logo.svg';
import {Button,Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import MediaQuery from 'react-responsive';


import './App.css';


class App extends Component {
  render() {

    return (
      <div className="App">
          <MediaQuery minWidth={1224} >
              <Grid>
                  <Row className="show-grid">
                      <Col md={8} >
                          <ItIsMe/>
                      </Col>
                      <Col md={4}>
                          <Design/>
                      </Col>
                  </Row>
              </Grid>

          </MediaQuery>
      </div>
    );
  }
}
//Header


//Introduction
const ItIsMe = () =>
        <div className={"myName"}>
            <h1>RIORDAN</h1>
            <h1>DERVIN</h1>
            <h1>ALFREDO</h1>
            <h3>freelance full-stack developer</h3>
        </div>

const Design = () =>
        <div className={"picture"}>
            <img src={logo}/>
        </div>

export default App;
