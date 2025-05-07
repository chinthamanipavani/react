import { Component } from "react";
import Tbody from "./tbody";

 class Table extends Component{
    constructor (){
        super()
        this.state={
            obj:[
                {
                    id:1,
                    name:"pavani",
                     age:"22"
                },
              {
                  id:2,
                    name:"vaani",
                    age:"22",
                }
            ]
        }
    }
render(){
    console.log(this.state.obj)
    return <>
    <h1>hello</h1>
    <div>
        <table border="5">
            <thead>
                <tr>
                    <th>id </th>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                <Tbody data={this.state.obj}/>
            </tbody>
        </table>
    </div>
    </>
}
 }
 export default Table; 