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
                <Star desc="Full Stack Framework"/>
                <Planet label={"MongoDB"} logo={"fas fa-database"} line={400} size={120} duration={20} type={1} extra={-25}/>
                <Planet label={"NodeJs"} logo={"fab fa-node-js"} line={530} size={100} duration={15} type={2} extra={40}/>
                <Planet label={"ExpressJS"} logo={"fab fa-node-js"} line={700} size={130} duration={40} type={3} extra={55}/>
                <Planet label={"React"} logo={"fab fa-react"} line={900} size={100} duration={15} type={4} extra={85}/>
            </div>
        )
    }
}

//Star
const Star = ({desc}) =>{
  return (
      <div className={"sun"}>
          <h1>{desc}</h1>
      </div>
  );
};
//Planet
class Planet extends Component {
    constructor(props){
        super(props);
        this.state = {
            label:props.label, logo: props.logo,
            line: props.line, size: props.size,
            type: props.type, duration: props.duration,
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
                    <i className={logo}/><br/>
                    <label>{label}</label>
                </div>
            </div>
        );
    };
}


