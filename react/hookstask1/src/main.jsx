import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React,{useState} from 'react'

const root=createRoot(document.getElementById('root'))


//way-1

// function Counter({count=0}){                                              
//     //if we can not assign any value that will be nan ({count})
//   function handleClick(){
// console.log("jjj")  
// const Count=count+1
// root.render(
// <Counter count={Count}/>
// )
//   }
//   return <>
//   <h1>sddi : {count}</h1>
//   <button onClick={handleClick}>click</button>
//   </>
//    }
// root.render(
// <Counter/>
// )





//way-2
function Counter(){
  const[count,setCount]=useState(0)
  const [name,setName]=useState("pavani")
function handleClick(){
  setName("kalyani")
  setName("lavanya")
  
  // setCount(count+1)
  // setCount(count+2)
  // setCount(count+3)
  // setCount(count+1)
  setCount(prev=>prev+1)//1            // [1,3,6]==stale means old values
  setCount(prev=>prev+2)//1+2=3
  setCount(prev=>prev+3)//3+3=6
}
return <>
<h1>count: {count}</h1>
<button onClick={handleClick}>click</button>
<h2>name : {name}</h2>
</>
}
root.render(
  // <Counter/>
  <App/>
)
