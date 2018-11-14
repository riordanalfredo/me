import React, { Component } from 'react';
//import logo from './logo.svg';
import {Button,Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import './App.css';

const MediaQuery = require('react-responsive');

const alignment = {
    grid: {
        paddingLeft: 100,
        paddingRight: 100
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
};
class App extends Component {
  render() {

    return (
      <div className="App">
          <ItIsMe/>
          <Grid fluid style={alignment.grid}>
              <Row style={alignment.row}>
                  <Col style={alignment.col}>
                      <Button bsSize="Large " bsStyle="warning" className="btn-gold">SEND</Button>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}
//Header
const MyHeader = () =>
    <StickyContainer >
        <Sticky>
            {

            }
        </Sticky>
    </StickyContainer>


//Introduction
const ItIsMe = () =>
        <div className={"myName"}>
            <h1>RIORDAN</h1>
            <h1>DERVIN</h1>
            <h1>ALFREDO</h1>
            <p>freelance full-stack developer</p>
        </div>


export default App;
