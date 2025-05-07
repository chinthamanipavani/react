 import {Component} from 'react';
 class ShowTypedColor extends Component{
constructor(){
    super()
    this.state={
        color:""
    }
}
handleChange=(event)=>{
this.setState({color:event.target.value})
}
render(){
    return (
<>
<div style={{height:"400px",width:"400px",border:"2px solid red",backgroundColor:this.state.color}}>
</div>
<h1>type color : <input type="text"  placeholder="enter a color" onChange={this.handleChange}/></h1>
</>
    )
}
 }
 export default ShowTypedColor;