import { Component } from "react";
 class Tbody extends Component{
    render(){
    console.log(this.props.data[0])
    const data=this.props.data
        return <>
        {data.map((ele,index)=>{
                return <tr key={index}>
                 <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
            </tr>
        })}
        </>
    }
 }
 export default Tbody;

