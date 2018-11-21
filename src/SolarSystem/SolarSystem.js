import React, {Component} from 'react';
import './SolarSystem.css';

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
                <Planet label={"MongoDB"} logo={"fas fa-database"} line={350} size={90} duration={20} type={1} extra={5}/>
                <Planet label={"ExpressJS"} logo={"fab fa-node-js"} line={500} size={90} duration={18} type={2} extra={20}/>
                <Planet label={"NodeJS"} logo={"fab fa-node-js"} line={600} size={100} duration={40} type={3} extra={70}/>
                <Planet label={"React"} logo={"fab fa-react"} line={750} size={80} duration={15} type={4} extra={75}/>
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
    };
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


