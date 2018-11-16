import React, { Component } from 'react';
import logo from './img/logo.svg';
import blank from './img/blank.png';
import profFoto from './img/portrait.jpg';
import {Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import MediaQuery from 'react-responsive';
import './App.css';
import './css/stars.css'
import anime from 'animejs';

//Screen Sizes
const mobile = 300;
const desktop = 1224;

class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            hyperlink:'',
        };
    }
    /*
    componentDidMount(){
        anime({
            targets: '#card',
            translateX: [
                { value: 100, duration: 1000 },
                { value: -50, duration: 2500 },
            ],
            duration: 3000,
        });
    }
    */

  render() {
    const {hyperlink} = this.state;
    return (
      <div className="App">
          <main>
              <MediaQuery minDeviceWidth={desktop}>
                  <CustomHeader/>
                  <MediaQuery minWidth={desktop}>
                      <Grid className={"introduction"} id={"introduction"}>
                          <Row className={"full-height"}>
                              <ItIsMe size={desktop}/>
                          </Row>
                          <Row>
                              <Card pic={Design}/>
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
                          </Row>
                      </Grid>
                      <Contact/>
                  </MediaQuery>
              </MediaQuery>
          </main>
          <Footer/>
      </div>
    );
  }
}

//Header
const CustomHeader = () => {
    //Scrolling progress bar
    if(!document.getElementById("progressBar")){
        window.onscroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        };
    }
    return(
    <div className="header" id={"navbar"} >
        <Grid>
            <Row>
                <Col md={2}>
                    <a href={"#introduction"}><img src={blank} width={110}/></a>
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
const AnchorFake = ({position}) =>
    <span className="anchor" id={position}> </span>;

const AnchorLink = ({name,link}) =>
        <a href={link}>
            <h3 className={"anchorLink"}>
                {name}
            </h3>
        </a>;

const screenCalculator = ({size}) => {
    console.log({size});
    console.log({desktop});
    return(
    (({size}.valueOf() === {mobile}.valueOf()) ? 'hidden' : 'show'));
};



/*General Objects*/
//Separator
const Separator = () =>
    <svg width="100" height="10" >
        <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#c39d63"/>
                <stop offset="100%" stop-color="#fad8a0"/>
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="200" fill="url(#linear)" />
    </svg>;
//Card
//Must be refactored!
const Card = (pic) =>
    <div className="card">
        <Design className={"card-pic"}/>
        <CardContent/>
    </div>;

const CardContent = (breadth, length, children) =>
        <div className={"card-content"} >
            <Separator/>
            <div className={"content"}>
                <p>
                    Welcome to my portfolio website.
                    At the moment, this website is under construction.
                    It is planned to be finish by 30 November 2018.
                </p>
                <h3>STAY TUNED!</h3>
            </div>
        </div>;

/*Page objects*/
//Introduction
const ItIsMe = (size) =>
    <div className={"myName "+ screenCalculator(size) } >
        <p><i>Hello, my name is</i></p>
        <h1>RIORDAN</h1>
        <h1>DERVIN</h1>
        <h1>ALFREDO</h1>
        <h3>freelance full-stack developer</h3>
    </div>;

//Photo
const Design = () =>
        <div className={"picture"}>
            <img id={"pp"} src={profFoto} width={300}/>
        </div>;

//Projects
const Projects = () =>
        <div className={"projects"} >
            <AnchorFake position={"projects"}/>
            <Grid>
                <Separator/>
                <div className={"content"}>
                    <h1>PROJECTS</h1>
                </div>
            </Grid>
        </div>



//Skills
const Skills = () =>
    <div className={"skills white"} >
        <AnchorFake position={"skills"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>SKILLS &amp; HOBBIES</h1>
            </div>
        </Grid>
    </div>;

//Resume
const Resume = () =>
    <div className={"resume"} >
        <AnchorFake position={"resume"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>RESUME &amp; EDUCATION</h1>
            </div>
        </Grid>
    </div>;

//Contact
const Contact = () =>
    <div className={"contact white"} >
        <AnchorFake position={"contact"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>CONTACT ME</h1>
            </div>
        </Grid>
    </div>;

//Footer
const Footer = () =>
    <footer>
        Developed with React<img src={logo} width={30}/>
        by <b> Riordan Dervin Alfredo </b>&copy; 2018
    </footer>;


export default App;
