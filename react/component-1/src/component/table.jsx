import { Component } from "react";
class Table extends  Component{
render(){
    console.log(this.props.obj)
    return <>
    
        {this.props.obj.map((ele,index)=>{
            return <tr>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.class}</td>
            </tr>
        })
        }

    </>
}
}
export default Table;