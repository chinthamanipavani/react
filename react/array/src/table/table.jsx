 function Table(){
    const array1=[
        { name: "pavani", age: "20", email: "pavani@gmail.com" },
    { name: "janu", age: "40", email: "janu@1234" },
    { name: "pavani", age: "20", email: "pavani@gmail.com" },
    { name: "janu", age: "40", email: "janu@1234" },
    { name: "pavani", age: "20", email: "pavani@gmail.com" },
    { name: "janu", age: "40", email: "janu@1234" },
    { name: "pavani", age: "20", email: "pavani@gmail.com" },
    { name: "janu", age: "40", email: "janu@1234" }
  ];
   const obj={
    name:"banu",
    age:14,
    email:"banu@gmail.com",
    address:{
        city:"sibyala",
        state:"andhra pradesh",
        country:"india"
           },
           hobbies:["reading","writing","singing"]
   }
   const isLogin=true;
    return <>
    <div>
       {isLogin ? 
       (
<div>
<center><h4>TABLE</h4>
</center>
     <table style={tableStyle}>
<thead style={headerStyle}>
    <tr>
        <th style={{padding:"5px"}}>Name</th>
        <th>Age</th>
        <th>Email</th>
    </tr>
</thead>
<tbody>
{array1.map((user,index)=>{
   return <>
   <tr style={rowStyle}>
    <td style={{padding:"10px", textAlign:"center",color:"white"}}>{user.name}</td>
    <td style={{padding:"10px", textAlign:"center",color:"white"}}>{user.age}</td>
    <td style={{padding:"10px", textAlign:"center",color:"white"}}>{user.email}</td>
   </tr>
   </>
})}

</tbody>
     </table>
</div>
        
       ):
       (
        <div>
         <h1>please login </h1>   
        </div>
       )
    }
        </div>

    </>
 }
 export default Table;


 //styles
 const tableStyle={
    border:"2px solid red",
    width:"100%",
    height:"100vh",
    padding:"10px",
    margin:"10px"
 }
 const headerStyle={
    padding:"10px",
    margin:"35px",
    backgroundColor:"red"
 }
 const rowStyle={
    paddinh:"8px",
    margin:"10px",
    backgroundColor:"blue"

 }