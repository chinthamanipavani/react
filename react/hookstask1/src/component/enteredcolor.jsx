import { Component } from "react";

 class Enteredcolor extends Component{
    constructor(){
        super()
        this.state={
            color:""
        }
    }
    handleChange=(event)=>{
        this.setState({color:event.target.value})
    }
    render (){
     return     <>
     <div style={{
        height:"400px",
        width:"400px",
        border:"2px solid",
        background:this.state.color
     }}>

     </div>
     {/* <h1>hello</h1> */}
     <input type="text"placeholder="enter color" onChange={this.handleChange} />
     </> 
    }

 }
 export default Enteredcolor;