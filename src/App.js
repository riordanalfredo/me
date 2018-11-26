import React, {Component, Fragment} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; // Button from Bootstrap
import MediaQuery from 'react-responsive';
import './App.css';
//Pictures
import logo from './img/logo.svg';
import blank from './img/blank.png';
import aus from './img/aus.png';
//Internal javascript files
import {MyForm} from './js/forms.jsx';
import {Project} from './Projects/Projects.jsx';
import {MyResume} from "./MyResume/MyResume";
import {SolarSystem} from './SolarSystem/SolarSystem';
import {Separator} from "./Separator/Separator";
import {FullStack} from "./FullStack/FullStack";
//Animation API
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import { slide as Menu } from 'react-burger-menu';

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
       //Scrolling progress bar
       let prevScrollpos = window.pageYOffset;
       window.onscroll = () => {
           let currentScrollPos = window.pageYOffset;
           if (prevScrollpos < currentScrollPos) {
               document.getElementById("footer").style.bottom = "-60px";
           } else {
               document.getElementById("footer").style.bottom = "0px";
           }
           prevScrollpos = currentScrollPos;
           const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
           const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           const scrolled = (winScroll / height) * 100;
           document.getElementById("progressBar").style.width = scrolled + "%";
       };

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
                          <Row className={"full-height"}>
                              <ItIsMe size={mobile}/>
                          </Row>
                          <Row>
                              <Fade>
                                  <CardHorizontal pic={ProfilePic}/>
                              </Fade>
                          </Row>
                      </Grid>
                      <Projects mobile/>
                      <Skills mobile/>
                      <Resume/>
                      <Contact/>
                  </MediaQuery>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={desktop}>
                  <Grid className={"introduction"} id={"introduction"}>
                      <Row>
                          <ItIsMe/>
                      </Row>
                      <Row>
                          <Fade>
                              <CardHorizontal pic={ProfilePic}/>
                          </Fade>
                      </Row>
                  </Grid>
                  <Projects mobile/>
                  <Skills mobile/>
                  <Resume/>
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
                Hello! Welcome to my portfolio website. I'm final year software engineering (honours)
                student at Monash University. This website is under construction at the moment.
                It is planned to be finished by <b>30 November 2018</b>.
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

    return(
        <div className={"myName "+ screenCalculator(size) } >
            <p align="center" >Melbourne<img alt="Australia flag" src={aus} width={30} style={styles}/> Based</p>
            <h1>RIORDAN</h1>
            <h1>DERVIN</h1>
            <h1>ALFREDO</h1>
            <h3>freelance full-stack developer</h3>
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
const Projects = ({mobile}) =>{
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: mobile?1:3,
        slidesToScroll: 1,
        arrows: !mobile
    };

    return(
        <div className={"projects"} >
            <AnchorFake position={"projects"}/>
            <Grid>
                <Separator/>
                <div className={"content"}>
                    <h1>PROJECTS</h1>
                    <Fade bottom> <Project setting={setting}/>  </Fade>
                </div>
            </Grid>
        </div>
    );
};

/*==============Skills==================*/
//Skills
const Skills = ({mobile}) =>{

    return(<div className={"skills white"} >
        <AnchorFake position={"skills"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>SKILLS &amp; INTERESTS</h1>
                <Fade bottom>
                    <h2>My Full-Stack Framework</h2>
                    {mobile ? <FullStack/> : <SolarSystem/>}
                    <p>Diagram above is MERN framework for my Full-Stack Web Development. </p>
                </Fade>
                <Fade bottom>
                    <Separator/>
                    <h2>Languages and Software</h2>
                    <OtherSkills/>
                </Fade>
                <Fade bottom >
                    <Separator/>
                    <h2>Interests and Hobbies</h2>
                    <Interests/>
                </Fade>
            </div>
        </Grid>
    </div>)
};


class OtherSkills extends Component {
    constructor(props){
        super(props);
        this.state = {
            skills : [
                {key:0, name: "HTML5", logo: "fab fa-html5"},
                {key:1,name: "CSS3", logo: "fab fa-css3"},
                {key:2,name: "JavaScript", logo: "fab fa-js-square"},
                {key:3,name: "Python", logo: "fab fa-python"},
                {key:4,name: "Java", logo: "fab fa-java"},
                {key:5,name: "GitHub", logo: "fab fa-github"},
                {key:6,name: "GitLab", logo: "fab fa-gitlab"},
                {key:7,name: "WordPress", logo: "fab fa-wordpress"},
                {key:8,name: "Windows", logo: "fab fa-windows"},
                {key:9,name: "Linux", logo: "fab fa-linux"},
                {key:10,name: "MacOS", logo: "fab fa-apple"},
                {key:11,name: "Docker", logo: "fab fa-docker"}
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
                <Grid>
                    {skills.map(item =>
                        <Col key={item.key} className="otherSkills" md={3} xs={6} style={style}>
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

const Interests = () =>{
    return(
        <div className="interests">
            <p>
                I am interested in Artificial Intelligence (AI), User Experience &
                User Interface (UI & UX), Software testing, and Astronomy topics.
                <br/>In leisure time,
                I create graphic design, doodling, and playing video / board games.

                Sometimes, I read <a href={"https://medium.com/"}>Medium</a> to gain knowledge and
                read memes / graphic novels to refresh my mind.
            </p>
        </div>
    );
};

/*==============Resume==================*/
//Resume
const Resume = () =>
    <div className={"resume"} >
        <AnchorFake position={"resume"}/>
        <Grid>
            <Separator/>
            <div className={"content"}>
                <h1>RESUME &amp; EDUCATION</h1>
                <MyResume/>
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
                    <Fade bottom>
                        <TempContact/>
                    </Fade>
                </div>
            </div>
        </Grid>
    </div>;

const TempContact = () =>{
    let uri = "Hello from /me website";
    const res = encodeURI(uri);
    const rowStyles = {
        textAlign:"center"
    };

    return(
        <div className={"contact-temp"}>
            <Grid >
                <Row style={rowStyles}>
                    <Col md={3}>
                        <a href={"mailto:riordan.alfredo@gmail.com"}>
                            <i className={"material-icons contact-icon"}>email</i>
                        </a>
                        <p>Email me</p>
                    </Col>
                    <Col md={3}>
                        <a href={"https://www.linkedin.com/in/riordan-alfredo/"}>
                            <i className={"fab fa-linkedin-in contact-icon"}> </i>
                        </a>
                        <p>Connect me in LinkedIn</p>
                    </Col>
                    <Col md={3}>
                        <a href={"https://wa.me/61449091145/?text=" + res}>
                            <i className={"fab fa-whatsapp contact-icon"}> </i>
                        </a>
                        <p>Chat in WhatsApp</p>
                    </Col>
                    <Col md={3}>
                        <a href={"https://github.com/riordanalfredo?tab=repositories" + res}>
                            <i className={"fab fa-github contact-icon"}> </i>
                        </a>
                        <p>Check my repositories!</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

/*==============Header & Footer==================*/
//Header
const CustomHeader = () => {
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
                        EY
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
    return(
        <footer id={id}>
            Developed with React<Spin><img alt="reactlogo" src={logo} width={30}/></Spin><br/>
            by <b> Riordan Dervin Alfredo </b>&copy; 2018
        </footer>
    );
};


export default App;
