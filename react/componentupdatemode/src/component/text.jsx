 import {Component} from 'react';
 class Text extends Component{
    constructor(){
        super()
        this.state={
            text:""
        }
    }
    handleChange =(event)=>{
        console.log(event.target.value)
        this.setState({text:event.target.value})
    }
    render(){
        return <>
        <h1>type text : {this.state.text}</h1>
        <input type="text " placeholder="enter text" onChange={this.handleChange}/>
        </>
    }
 }
 export default Text;