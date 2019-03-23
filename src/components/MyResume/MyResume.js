import React,{Component, Fragment} from "react";
import {MyButton} from "../MyButton/MyButton";
import Fade from "react-reveal/Fade";
import resumeStyle from "./MyResume.module.css";
import Grid from "@material-ui/core/Grid/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

export class MyResume extends Component{
    render(){
        return(
            <Fragment >
                <DownloadResume/>
                <Education/>
                <Research/>
            </Fragment>
        );
    }
}

const DownloadResume = () =>
    <Fade bottom>
        <p className={resumeStyle.download}>Please kindly download my resume below for your reference.</p>
        <MyButton text={"DOWNLOAD"} extraText= " RESUME"  link={"../MyResume/resume.pdf"} download={"resume.pdf"}/>
    </Fade>;

const Education = () =>{
    const whole={
        padding: "2vh"
    };
    return(
        <div className={resumeStyle.theBox}>
            <h2 >Education </h2>
            <Grid style={whole}>
                <Row>
                    <Col md={4}>
                        <h4>2012-2015</h4>
                        <b>Major in Science Studies</b>
                        <p>Saint Joseph High School <br/> Malang, East Java</p>
                        <i>Indonesia</i>
                    </Col>
                    <Col md={4}>
                        <h4>2015-2016</h4>
                        <b>Diploma of Engineering, Engineering</b>
                        <p>Monash College <br/> Melbourne, Victoria </p>
                        <i>Australia</i>
                    </Col>
                    <Col md={4}>
                        <h4>2017-2019</h4>
                        <b>Bachelor of Software Engineering (Honours)</b>
                        <p>Monash University <br/> Melbourne, Victoria </p>
                        <i>Australia</i>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
};


const Research = () =>
    <div className={resumeStyle.theBox}>
        <h2>Research Studies</h2>
            <div className={resumeStyle.research}>
                <h4>  <i className="fa fa-book"/> Vulnerability Analysis of Hybrid Android Apps</h4>
                <b> (Monash Summer Scholarship 2018)</b>
                <p>
                    Hybrid Android apps contain functions implemented in Javascript, which makes it possible to
                    benefit from traditional web-based techniques.
                    While there are already quite e few tools that can be used for detecting Javascript-related
                    vulnerabilities in traditional web applications, there are no available techniques that can
                    be used for detecting Javascript related vulnerabilities in hybrid Android apps.
                    <br/>The output of this project is expected to be a toolchain that (1) extracts the Javascript
                    code from Android apps and (2) analyses the extracted code for identifying potential vulnerabilities.
                </p>
                <a href={"https://github.com/riordanalfredo/Hybrid-Android-App-Vulnerability-Analyser"}>Interested? Find out more in here . . .</a>
            </div>
        </div>;