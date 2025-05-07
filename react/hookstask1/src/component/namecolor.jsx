import { Component } from "react";

 class Namecolor extends Component{
constructor(){
    super()
    this.state={
        name:["pavani","kalyani","pallavi"],
        colors:["red","green","violet"]
    }
}
    render (){
        // console.log(this.state.name)
        return <>
        {this.state.name.map((element,index)=>{
            return <>
           <h1 style={{color:this.state.colors[index]}}>{element}</h1>
            </>
        })}
        <h1>xjhcs</h1>
        
        </>
    }
 }
 export default Namecolor;