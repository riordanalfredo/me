import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

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
                    desc:'Puzzle games web application',
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
        return (
            <div>
                <Grid>
                    <Row>
                        {list.map(item =>
                            <Col key={item.key} md={4} xs={12}>
                                <Card
                                    title={item.title}
                                    linkUrl={item.linkUrl}
                                    desc = {item.desc}
                                    bg={item.bg}
                                />
                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        );

    }
}


const Card = ({title,bg,linkUrl,desc}) =>{
    let image={
        background: `-webkit-linear-gradient(0.9turn,#c39d63, #fad8a0)`,
        backgroundImage: `url(${bg})`
    };
    return(
        <div className={"card"}  >
            <div className={"card-pic"} style={image}/>
            <div className={"card-desc"}>
                <a href={linkUrl}><h2>{title}</h2></a>
                <p>{desc}</p>
            </div>
        </div>
    );
};


