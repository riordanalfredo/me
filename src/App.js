import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import MediaQuery from 'react-responsive';
import './App.css';
//Pictures
import logo from './img/logo.svg';
import blank from './img/blank.png';
import aus from './img/aus.png';
//Internal javascript files
import {MyForm} from './js/forms.jsx';
import {Project} from './js/projects.jsx';
import {SolarSystem} from './js/solarSystem';
//Animation API
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';

//Screen Sizes
const mobile = 300;
const desktop = 1224;

class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            loading:false
        };
    }
   componentDidMount(){
       //this.setState({ loading: false });
   }

  render() {
    const {loading} = this.state;
      if(loading) { // if your component doesn't have to wait for an async action, remove this block
          return null; // render null when app is not ready
      }
    return (
      <div className="App">
          <main>
              <CustomHeader/>
              <MediaQuery minDeviceWidth={desktop}>
                  <MediaQuery minWidth={desktop}>
                      <Grid className={"introduction"} id={"introduction"}>
                          <Row className={"full-height"}>
                              <ItIsMe size={desktop}/>
                          </Row>
                          <Row>
                              <Fade>
                                  <CardHorizontal pic={ProfilePic}/>
                              </Fade>
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
                              <ProfilePic/>
                          </Row>
                      </Grid>
                      <Contact/>
                  </MediaQuery>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={desktop}>
                  <Grid className={"introduction"} id={"introduction"}>
                      <Row>
                          <ItIsMe/>
                      </Row>
                  </Grid>
                  <p className={"white"}>
                      <i>Mobile view is under development at the moment</i>
                  </p>
                  <Contact/>
              </MediaQuery>
          </main>
          <Footer id={"footer"}/>
      </div>
    );
  }
}

/*==============General Objects==================*/
//Link Header Anchor by faking its position
const AnchorFake = ({position}) => <span className="anchor" id={position}> </span>;

//Link to anchor
const AnchorLink = ({name,link}) =>
    <a href={link}>
        <h3 className={"anchorLink"}>
            {name}
        </h3>
    </a>;

//Calculate screen Size
const screenCalculator = ({size}) => {
    return(
    (({size}.valueOf() === {mobile}.valueOf()) ? 'hidden' : 'show'));
};

//Separator
const Separator = () =>
    <svg width="100" height="10" >
        <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#c39d63"/>
                <stop offset="100%" stopColor="#fad8a0"/>
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="200" fill="url(#linear)" />
    </svg>;

//Card
const CardHorizontal = () =>
    <div className="card-horizontal">

        <ProfilePic/>
        <Fade left>
            <CardContent/>
        </Fade>
    </div>;

const CardContent = () =>
    <div className={"card-content"} >
        <Separator/>
        <div className={"content"}>
            <p>
                Welcome to my portfolio website.
                This website is under construction at the moment.
                It is planned to be finish by <b>30 November 2018</b>.
            </p>
            <h3>STAY TUNED!</h3>
        </div>
    </div>;

/*==============Page objects==================*/
/*==============Introduction==================*/
//Introduction


const ItIsMe = (size) =>{
    const styles={
        borderRadius:"3px",
        border: '3px white'
    };

    const marginIng = {
        marginTop:"30px"
    };
    return(
        <div className={"myName "+ screenCalculator(size) } >

            <p><i>Hello, my name is</i></p>
            <h1>RIORDAN</h1>
            <h1>DERVIN</h1>
            <h1>ALFREDO</h1>

            <h3>freelance full-stack developer</h3>
            <p align="center" style={marginIng}>melbourne <img src={aus} width={30} style={styles}/> based</p>
        </div>
    );
};


//Photo
const ProfilePic = () =>
    <div className={"picture"}>
        <div id={"pp"} />
    </div>;

/*==============Projects==================*/
//Projects
const Projects = () =>
    <div className={"projects"} >
        <AnchorFake position={"projects"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>PROJECTS</h1>
                <Fade bottom> <Project/>  </Fade>
            </div>
        </Grid>
    </div>;

/*==============Skills==================*/
//Skills
const Skills = () =>{
    const styles={
        marginTop: '5vh',
    };
    return(
        <div className={"skills white"} >
            <AnchorFake position={"skills"}/>
            <Grid>
                <Separator/>
                <div className={"content"}>
                    <h1>SKILLS &amp; INTERESTS</h1>
                    <SolarSystem/>
                    <br/>
                    <p>Diagram above is MERN framework for my Full-Stack Web Development. </p>
                    <OtherSkills/>
                </div>
            </Grid>
        </div>
    );
};

class OtherSkills extends Component {
    constructor(props){
        super(props);
        this.state = {
            skills : [
                {name: "HTML5", logo: "fab fa-html5"},
                {name: "CSS3", logo: "fab fa-css3"},
                {name: "JavaScript", logo: "fab fa-js-square"},
                {name: "Python", logo: "fab fa-python"},
                {name: "Java", logo: "fab fa-java"},
                {name: "GitHub", logo: "fab fa-github"},
                {name: "GitLab", logo: "fab fa-gitlab"},
                {name: "WordPress", logo: "fab fa-wordpress"},
                {name: "Windows", logo: "fab fa-windows"},
                {name: "Linux", logo: "fab fa-linux"},
                {name: "MacOS", logo: "fab fa-apple"},
                {name: "Docker", logo: "fab fa-docker"}
            ]
        }
    }
    render(){
        const {skills} = this.state;
        const icons = {
            color: "#fad8a0",
            fontSize: '7em',
            transition: "1s"
        };
        const style = {
            margin: "30px auto",
        };

        return(
            <div>
                <h2>OTHER NOTABLE SKILLS</h2>
                <Grid>
                    {skills.map(item =>
                        <Col className="otherSkills" md={3} style={style}>
                            <i className={item.logo} style={icons}/><br/><br/>
                            <label>{item.name}</label>
                        </Col>
                        )
                    }
                </Grid>
            </div>
        );
    }

}

/*==============Resume==================*/
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

/*==============Contact==================*/
//Contact
const Contact = () =>
    <div className={"contact white"} >
        <AnchorFake position={"contact"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>CONTACT ME</h1>
                <div className={"contact-form"}>
                    <MyForm />
                    <TempContact />
                </div>
            </div>
        </Grid>
    </div>;

const TempContact = () =>{
    let uri = "Hello from /me website";
    const res = encodeURI(uri);
    const styles = {
        textAlign:"center"
    };

    return(
        <div className={"contact-temp"}>
            <Grid>
                <Row style={styles}>
                    <Col md={4}>
                        <a href={"mailto:riordan.alfredo@gmail.com"}>
                            <i className={"material-icons contact-icon"}>email</i>
                        </a>
                        <p>Email me</p>
                    </Col>
                    <Col md={4}>
                        <a href={"https://www.linkedin.com/in/riordan-alfredo/"}>
                            <i className={"fab fa-linkedin-in contact-icon"}> </i>
                        </a>
                        <p>Connect me in LinkedIn</p>
                    </Col>
                    <Col md={4}>
                        <a href={"https://wa.me/61449091145/?text=" + res}>
                            <i className={"fab fa-whatsapp contact-icon"}> </i>
                        </a>
                        <p>Chat in WhatsApp</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

/*==============Header & Footer==================*/
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
                    <Col md={2} xs={2}>
                        <a href={"#introduction"}><img alt={"mylogo"} src={blank} width={110}/></a>
                    </Col>
                    <Col md={10} className={"text-right"} xsHidden smHidden >
                        <AnchorLink name={"HOME"} link={"#introduction"} />
                        <AnchorLink name={"PROJECTS"} link={"#projects"} />
                        <AnchorLink name={"SKILLS"} link={"#skills"} />
                        <AnchorLink name={"RESUME"} link={"#resume"} />
                        <AnchorLink name={"CONTACT"} link={"#contact"} />
                    </Col>
                    <Col xs={10} mdHidden lgHidden>
                        <p className={"white text-right"}>HAMBURGER MENU</p>
                    </Col>
                </Row>
            </Grid>
            <div className="progress-container">
                <div className="progress-bar" id="progressBar"> </div>
            </div>
        </div>
    )
};

//Footer
const Footer = ({id}) =>{
    //On scrolling footer hide and show
    /* When the user scrolls down, hide the footer. When the user scrolls up, show the footer */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            document.getElementById("footer").style.bottom = "-60px";
        } else {
            document.getElementById("footer").style.bottom = "0px";
        }
        prevScrollpos = currentScrollPos;
    };
    return(
        <footer id={id}>
            Developed with React<Spin><img alt="reactlogo" src={logo} width={30}/></Spin><br/>
            by <b> Riordan Dervin Alfredo </b>&copy; 2018
        </footer>
    );
}


export default App;
