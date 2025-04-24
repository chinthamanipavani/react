import {formData} from './Logindata'
function Login(){
    // console.log(formData)
    const loginData=formData.loginDetails.fields
return <div>
    <center>
    <h3>LOGIN FORM</h3>
<div 
style={{
    border: '2px solid red',
    width: '400px',             
    padding: '20px',             
    borderRadius: '10px',        
    boxShadow: '0px 0px 10px #ccc', 
    textAlign: 'left'            
  }}

>
    {loginData.map((ele)=>{
 return   <div key={ele.id}>
    <label style={{margin:"5px",padding:"10px"}}>{ele.name.charAt(0).toUpperCase()+ele.name.slice(1)}</label> : 
    <input  style={{margin:"10px",padding:"5px"}}
    type={ele.type}
    id={ele.id}
    placeholder={ele.placeholder}
    />    
</div>
})}
</div><br />
<button type="login" style={{margin:"10px",padding:"5px",background:"blue",color:"white",borderRadius:"6px"}}>login</button>
<br /><br /></center> 
</div>
}
export default Login;