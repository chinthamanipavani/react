import Cards from "./cards/Cards";
import Table from "./table/table";

function App(){
    const isLogIn=true;
const arr=[{
  name:"banu",
  age:14,
  phonenumber:32753667215

},
{
  name:"bablu",
  age:4,
  phonenumber:12753667215

},
{
  name:"raja",
  age:54,
  phonenumber:99953667215

}
]

return <div>
    <h1>
        {isLogIn ?
        (
            <div style={{display:"flex" ,justifyContent:"center"}}>
            <Cards/>
            <Table/>
            </div>
        ):
        (
            <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              backgroundColor:"orange"
            }}
          >
            <p>Nothing to show, please login</p>
          </div>
        )
    }
    </h1>
<div>
  <p>{arr.length>0 ?
  (
    
    <div style={para}>
      
    {arr.map((ele)=>{
      return <p style={array}>
        <h3 style={style}>{ele.name}</h3>
        <h3 style={style}>{ele.age}</h3>
        <h3 style={style}>{ele.phonenumber}</h3>      
      </p>
    })}
    </div>
  ):
  (
    <p>
      No data
    </p>
  )
}</p>
</div>
</div>
}
export default App;
const style={
  margin:"5px",
  padding:"10px"

}

const para={
display:"flex",
flexdirection:"column",
justifyContent:"center",
padding:"10px"
}
const array={
  border:"2px solid red",
  margin :"25px",
}
