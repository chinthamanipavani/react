import Parent from "./Parent";

 function Grandparent({name,age ,obj}){
    return <Parent name={name} age={age} obj={obj}/>
 }
 export default Grandparent;