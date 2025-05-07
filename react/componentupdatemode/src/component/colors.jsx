import {Component} from 'react'
class Colors extends Component{
    constructor (){
        super()
        this.state={
names:["pavani","kalyani","janu"],
colors:["green","yellow","blue"]
        }
    }
 render (){
    return (
        <div>
          {this.state.names.map((ele,index)=>{
            return <div>
            <h1 key={index} style={{color:this.state.colors[index]}}>{ele}</h1>
            </div>

          })}
        </div>
    )
 }   
}
export default Colors;