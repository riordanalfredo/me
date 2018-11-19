import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import '../css/solarSystem.css';

export class SolarSystem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planets:''
        };
    }

    render(){
        return (
            <div className={"solarSystem"}>
                <div className={"sun"}>
                    <h1>Full-Stack Framework</h1>
                </div>
                <Planet label={"MongoDb"} logo={"fas fa-database"}line={400} size={90} duration={20} type={1} extra={-20}/>
                <Planet label={"NodeJs"} logo={"fab fa-node-js"} line={500} size={80} duration={25} type={2} extra={50}/>
                <Planet label={"ExpressJS"} logo={"fab fa-node-js"} line={700} size={90} duration={40} type={3} extra={30}/>
                <Planet label={"React"} logo={"fab fa-react"} line={900} size={100} duration={30} type={4} extra={90}/>
            </div>
        );
    }
}

//Star
const Star = ({desc, ...props}) =>{
  return (
      <div className={"sun"}>

      </div>
  );
};
//Planet
class Planet extends Component {
    constructor(props){
        super(props);
        this.state = {
            label:props.label,
            logo: props.logo,
            line: props.line,
            size: props.size,
            type: props.type,
            duration: props.duration,
            extra: props.extra,
        }
    }

    render(){
        const {label,logo,line,size,duration,type,extra} = this.state;

        const planet = {
            position: 'relative',
            top:'50%', left:'50%',
            margin: '-'+size/2+'px',
            width: size + 'px',
            height: size +'px',
            padding: size/6 +'px',
            textAlign:'center',
            backgroundColor: 'white',
            borderRadius:'50%',
            animation: 'rot'+ type +' '+ duration +'s infinite linear'
        };
        const path = {
            position: 'relative',
            margin: "-"+ (0.80*parseInt(line)+parseInt(extra))+'px auto',
            border: 'solid 1px grey',
            width: line+'px',
            height: line+'px',
            borderRadius: '50%',
        };


        return(
            <div style={path}>
                <div className={"planet"} style={planet}>
                    <i className={logo}/>
                    <p>{label}</p>
                </div>
            </div>
        );
    };
}


