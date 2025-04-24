import Grandparent from "./components/Grandparent";

 function App(){
  const name="pavani"
  const age=23
  const obj=[{
    sname:"raja",
    sage:22
    
  }]
  // console.log(obj[0].sname)
return <Grandparent 
name={name}
age={age}
obj={obj}
/>
 }
 export default App;