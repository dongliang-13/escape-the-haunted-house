import scare from "./images/scare.png";
import { Component } from "react";

export default class Page3 extends Component{
    componentDidMount(){
        setTimeout( ()=>{
            this.props.changePage("page4");
        },2000)
    }
    render(){
        return(
            <div id = "page3">
                <img id = "page3-scare" src = {scare} alt = "scare"/>
            </div>
        )
    }
}