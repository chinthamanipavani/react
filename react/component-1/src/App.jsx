import { Component } from "react";
import Props from "./component/props";
import Table from "./component/table";
import Cards from "./component/Cards";
import LoginLogout from "./component/LoginLogout";

class App extends Component{
obj=[
  {
    name:"ooo",
    age:12,
    class:2
  },
  {
    name:"nnn",
    age:22,
    class:22
  }
]
  render(){
      // name={this.obj.name}
      name="pavani"
    return <>
        <Props obj={this.obj}/>
        {/* <h1>{this.obj.age}</h1> */}
        {/* <h1>{this.obj.nam}</h1> */}
        {/* <h1>{this.obj.class}</h1> */}
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit ut quas earum libero exercitationem, quae expedita rerum ipsum veniam distinctio iusto vero aut est, aliquid necessitatibus fuga. Nemo, tempora.
      <div>
        <br />
      <table>
        <thead>
          <tr>
          <th>name</th>
          <th>age</th>
          <th>class</th>
          </tr>
        </thead>
        <tbody>
          <Table obj={this.obj}/>
        </tbody>
        
      </table>
      </div>
      {/* <Cards/> */}
      <LoginLogout/>
    </div>
    </>
  }

}
export default App;