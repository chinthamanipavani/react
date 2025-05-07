import { Component } from "react";

 class Props extends Component{
    render(){
        console.log(this.props)
        // age="5"
        return <>
        <h1>type data: {this.props.name}</h1>
        </>
    }

 }
 export default Props;