 function ArrayComponent(){

    const containerstyles = {
        display: "flex",
        alignItems: "center",
        flexDirection: "row", // Corrected property name
        gap: "2rem",
        width: "100%",
        height: "100%",
        border: "2px solid red",
        margin: "8px",
        padding: "8px",
        overflow: "hidden"
      };
      

    const a=[{name:"pavani",age:"20",email:"pavani@gmail.com"},{name:"janu",age:"40",email:"janu@1234"}]
    const obj={
        name:"raja",
        age:20,
        email:"jhs@gmail.com"
    }  ;  
     const isLogin=false;
    return <>
    <div>
        {isLogin ?
   (
    <div>
       <h1>Welcome</h1>
    </div>
   ) :
   (
    <>
<h2>Please log in</h2>
</>
   )    
    }
    </div>
    <div style={containerstyles}>

        {a.length>0 ?(
            <>
            <h1>hai</h1>
            {
                a.map((ele,index) =>(
                    <>
                    <p>{ele.name} </p>
                    <p>{ele.age}</p>
                    <p>{ele.email}</p>
                   
                        </>  
                )
                
                    
                )
            }
            </>
        ):
        (
            <>
            <h2>hello</h2>
            </>
        )
    
    }
    </div>
    <div className="object">
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.email}</p>

    </div>
    </>
 }
 export default ArrayComponent;