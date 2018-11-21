//Separator
import React,{Component} from "react";

export class Separator extends Component {
    render(){
        return(
            <svg width="100" height="10" >
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="#c39d63"/>
                        <stop offset="100%" stopColor="#fad8a0"/>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="600" height="200" fill="url(#linear)" />
            </svg>
        );
    }
}
