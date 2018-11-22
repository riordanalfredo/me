import React, { Component } from 'react';
import Slider from "react-slick";
import projectStyle from "./Projects.css";
import Chip from '@material-ui/core/Chip';

export class Project extends Component{

    constructor(props){
        super(props); //Get props from Component

        this.state ={
            list:[
                {
                    key: 1,
                    title:'Kimply Colour Game',
                    linkUrl: 'https://play.google.com/store/apps/details?id=com.kimplycolor.game&hl=en_US',
                    desc:'A simple coloring game',
                    bg:'https://picsum.photos/400/500/?random'
                }
                ,
                {
                    key: 2,
                    title:'Switch Puzzle Game',
                    linkUrl: 'https://bit.do/switchy',
                    desc:'A Puzzle game web application',
                    bg:'https://picsum.photos/400/500/?image=0'
                },
                {
                    key: 3,
                    title:'PPIA Monash Survival Guide',
                    linkUrl: 'https://bit.do/survivalguide',
                    desc:'Survival Guide Web Application ',
                    bg:'https://picsum.photos/400/500/?image=19'
                },
            ],
        }
    }

    render() {
        const {list} = this.state;
        const {setting} = this.props;
        return (
            <Slider {...setting}>
                {list.map(item =>
                    <div key={item.key} style={projectStyle["card-carousel"]}>
                        <Card
                            title={item.title}
                            linkUrl={item.linkUrl}
                            desc = {item.desc}
                            bg={item.bg}
                        />
                    </div>
                )}
            </Slider>
        );
    }
}
const Card = ({title,bg,linkUrl,desc,languages}) =>{
    let image={
        background: `-webkit-linear-gradient(0.9turn,#c39d63, #fad8a0)`,
        backgroundImage: `url(${bg})`
    };
    return(
        <div className={"card"}  >
            <a href={linkUrl}>
                <div className={"card-pic"} style={image}/>
            </a>
            <div className={"card-desc"}>
                <a href={linkUrl}><h2>{title}</h2></a>
                <p>{desc}</p>
            </div>
        </div>
    );
};


