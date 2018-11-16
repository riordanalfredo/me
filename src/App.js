import React, { Component } from 'react';
import logo from './img/logo.svg';
import blank from './img/blank.png';
import profFoto from './img/portrait.jpg';
import {Button,Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import MediaQuery from 'react-responsive';
import './App.css';
import './css/stars.css'

//Screen Sizes
const mobile = 500;
const desktop = 1224;

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
          <CustomHeader/>
          <MediaQuery minDeviceWidth={desktop}>
              <MediaQuery minWidth={desktop}>
                  <Grid className={"introduction"} id={"introduction"}>
                      <Row className="show-grid">
                          <Col md={4} >
                              <Design/>
                          </Col>
                          <Col md={8}>
                              <ItIsMe/>
                          </Col>
                      </Row>
                  </Grid>
                  <Projects/>
                  <Skills/>
                  <Resume/>
                  <Contact/>
              </MediaQuery>
              <MediaQuery minWidth={mobile} maxWidth={desktop}>
                  <Grid className={"introduction"} id={"introduction"}>
                      <Row>
                          <Design/>
                          <ItIsMe/>
                      </Row>
                  </Grid>
              </MediaQuery>
          </MediaQuery>
          <Footer/>
      </div>
    );
  }
}

//Header
const CustomHeader = () => {
    //Scrolling progress bar
    window.onscroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    };
    return(
    <div className="header" id={"navbar"} >
        <Grid>
            <Row>
                <Col md={2}>
                    <img src={blank} width={110}/>
                </Col>
                <Col md={10} className={"text-right"}>
                    <AnchorLink name={"HOME"} link={"#introduction"} />
                    <AnchorLink name={"PROJECTS"} link={"#projects"} />
                    <AnchorLink name={"SKILLS"} link={"#skills"} />
                    <AnchorLink name={"RESUME"} link={"#resume"} />
                    <AnchorLink name={"CONTACT"} link={"#contact"} />
                </Col>
            </Row>
        </Grid>
        <div className="progress-container">
            <div className="progress-bar" id="progressBar"> </div>
        </div>
    </div>
    )
};

//Link Header Anchor
const AnchorLink = ({name,link}) =>
        <a href={link}>
            <h3 className={"anchorLink"}>
                {name}
            </h3>
        </a>;
const screenCalculator = (size) => ((size === desktop) ? 'desktop' : 'mobile');

/*General Objects*/
//Separator
const Separator = () =>
    <svg width="150" height="10" >
        <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#c39d63"/>
                <stop offset="100%" stop-color="#fad8a0"/>
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="200" fill="url(#linear)" />
    </svg>;

/*Page objects*/
//Introduction
const ItIsMe = (size) =>{
    return (
    <div className={"myName" + " " + screenCalculator(size) } >
        <h1>RIORDAN</h1>
        <h1>DERVIN</h1>
        <h1>ALFREDO</h1>
        <h3>freelance full-stack developer</h3>
    </div>
    )
};

//Photo
const Design = () =>
        <div className={"picture"}>
            <img src={profFoto} width={350}/>
        </div>;

//Projects
const Projects = () =>
    <div className={"projects"} id={"projects"}>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>PROJECTS</h1>
            </div>
        </Grid>
    </div>;

//Skills
const Skills = () =>
    <div className={"skills"} id={"skills"}>
        test again
    </div>;

//Resume
const Resume = () =>
    <div className={"resume"} id={"resume"}>
        Resume
    </div>;

//Contact
const Contact = () =>
    <div className={"contact"} id={"contact"}>
        Contact Me
    </div>;

//Footer
const Footer = () =>
    <footer>
        Developed with React<img src={logo} width={30}/>
        by <b> Riordan Dervin Alfredo </b>&copy; 2018
    </footer>;


export default App;
