import { Component } from "react";

 class Typed extends Component{
    constructor(){
        super()
        this.state={
            name:"gghgh"
        }
    }
   handleChange=(event)=>{
    this.setState({name:event.target.value});
   }
    render(){
        return <>
        <h1>typed value:{this.state.name}</h1>
        <input type="text" placeholder="typed data" onChange={this.handleChange} />
        </>
    }

 }
 export default Typed;








 