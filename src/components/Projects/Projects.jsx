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
                    desc:'A simple color choice game in Android',
                    bg:'https://picsum.photos/400/500/?image=301',
                    chips: ['HTML','CSS', 'JavaScript']
                },
                {
                    key: 2,
                    title:'Switch Puzzle Game',
                    linkUrl: 'https://bit.do/switchy',
                    desc:'Web application puzzle game',
                    bg:'https://picsum.photos/400/500/?image=1056',
                    chips: ['HTML','CSS', 'JavaScript']
                },
                {
                    key: 3,
                    title:'Survival Guide',
                    linkUrl: 'https://bit.do/survivalguide',
                    desc:'Survival Guide Web Application ',
                    bg:'https://picsum.photos/400/500/?image=19',
                    chips: ['HTML','CSS', 'JavaScript']
                },
                {
                    key: 4,
                    title:'Stock Quote Monitor',
                    linkUrl: 'https://github.com/riordanalfredo/StockQuoteMntr',
                    desc:'FIT3077 assignment which is written in Java and implemented MVC architecture.',
                    bg:'https://picsum.photos/400/500/?image=1',
                    chips: ['HTML','CSS', 'JavaScript', 'Java']
                },
                {
                    key: 5,
                    title:'Kiosk Drawing Application',
                    linkUrl: 'https://riordanalfredo.github.io/kiosk',
                    desc:'Canvas drawing web application',
                    bg:'https://picsum.photos/400/500/?image=47',
                    chips: ['HTML5','CSS3', 'JavaScript']
                },
                {
                    key: 6,
                    title:'Roster Application',
                    linkUrl: 'https://gitlab.com/hyua29/RosterApp',
                    desc:'Application that helps manager to create weekly roster',
                    bg:'https://picsum.photos/400/500/?image=38',
                    chips: ['HTML','CSS', 'JavaScript', 'Java']
                },
                {
                    key: 7,
                    title:'Beans Cafe Loyalty App',
                    linkUrl: 'https://gitlab.com/ooigloria/beans-cafe-loyalty',
                    desc:'Applications in participation of UNIHACK 2018',
                    bg:'https://picsum.photos/400/500/?image=82',
                    chips: ['Android', 'XML', 'Gitlab']
                }
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
                            chips={item.chips}
                        />
                    </div>
                )}
            </Slider>
        );
    }
}
const Card = ({title,bg,linkUrl,desc,chips}) =>{
    let image={
        background: `-webkit-linear-gradient(0.9turn,#c39d63, #fad8a0)`,
        backgroundImage: `url(${bg})`
    };
    return(
        <div className={"card"} >
            <a href={linkUrl}>
                <div className={"card-pic"} style={image}/>
            </a>
            <div className={"card-desc"}>
                <a href={linkUrl}><h2>{title}</h2></a>
                <p>{desc}</p>
            </div>
            <div className="chips-pg">
                {
                    chips.map(item =>
                       <Chip label={item} className={"chips-element"} variant="outlined"/>
                    )
                }
            </div>
        </div>
    );
};


