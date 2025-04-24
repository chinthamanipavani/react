 import {formData} from './Logindata'
 function Registration(){
    const registrationData=formData.registrationDetails.fields
    return <div>
    <center>
    <h3>REGISTRATION FORM</h3>

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
    {registrationData.map((ele)=>{
        return <div key={ele.id}>
        <label style={{margin:"10px",padding:"5px"}}>{ele.name} : </label>
        <input style={{margin:"10px",padding:"5px"}}
        type= {ele.type}
        id={ele.id}
        placeholder={ele.placeholder}
        />
        </div>
    })}
    </div>
    <br />
   <button style={{margin:"10px",padding:"5px",background:"blue",color:"white",borderRadius:"6px"}} type="submit">submit</button>
    </center>
</div>
 }
 export default Registration;