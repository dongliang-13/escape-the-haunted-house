import { Component } from "react"

export default class BlackScreen extends Component{
    componentDidMount(){
        setTimeout( ()=> {
            this.props.changePage("page1")
        }, 1000)
    }
    render(){
        return (
            <div id = "blackScreen"></div>
        )
    }
}