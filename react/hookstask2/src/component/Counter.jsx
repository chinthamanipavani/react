import React,{useState,useEffect} from 'react';
function Counter(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState("kalyani")
useEffect(()=>{
setCount(prev=>prev+1)
},[])
useEffect(()=>{
    // setName(prev=>"llll")
})
const handleClick=()=>{
setName("pavani")
// setCount(prev=>prev+1)
}
useEffect(()=>{
    const interval=setInterval(()=>{
setCount(prev=>prev+1)
    },1000)
    return ()=>clearInterval(interval)
})

return <>
<h1>count: {count}</h1>
<h1>Name : {name}</h1>
<button onClick={handleClick}>click</button>

</>
}
export default Counter;