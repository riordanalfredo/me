import React, { Component } from 'react';
import logo from './img/logo.svg';
import blank from './img/blank.png';
import profFoto from './img/portrait.jpg';
import {Button,Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import MediaQuery from 'react-responsive';


import './App.css';


class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            hyperlink:'',
        };
    }

  render() {
    const {hyperlink} = this.state;
    return (
      <div className="App">
          <MediaQuery minWidth={990} maxWidth={1400}>
              <CustomHeader/>
              <Grid className={"introduction"} id={"introduction"}>
                  <Row className="show-grid">
                      <Col md={8} >
                          <ItIsMe/>
                      </Col>
                      <Col md={4}>
                          <Design/>
                      </Col>
                  </Row>
              </Grid>
              <Projects/>
              <Skills/>
          </MediaQuery>
          <MediaQuery maxWidth={990}>

          </MediaQuery>
          <Footer/>
      </div>
    );
  }
}
//Header

const CustomHeader = () =>
    <div className="header" id={"navbar"} >
        <Grid>
            <Row>
                <Col md={2}>
                    <img src={blank} width={110}/>

                </Col>
                <Col md={10} className={"text-right"}>
                    <AnchorLink name={"HOME"} link={"#introduction"} />
                    <AnchorLink name={"PROJECTS"} link={"#projects"} />
                </Col>
            </Row>
        </Grid>
        <div className="progress-container">
            <div className="progress-bar" id="progressBar"></div>
        </div>
    </div>

//Scrolling progress bar
window.onscroll = function() {scrolling()};
function scrolling() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}


//Link Header Anchor
const AnchorLink = ({name,link}) =>
        <a href={link}>
            <h3 className={"anchorLink"}>
                {name}
            </h3>
        </a>

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
            <img src={profFoto} width={350}/>
        </div>

//Projects
const Projects = () =>
    <div className={"projects"} id={"projects"}>
        Noice
    </div>

//Skills
const Skills = () =>
    <div>
        test again
    </div>

const Footer = () =>
    <footer>
        Developed with React<img src={logo} width={30}/>
        by <b> Riordan Dervin Alfredo </b>&copy; 2018
    </footer>


export default App;
