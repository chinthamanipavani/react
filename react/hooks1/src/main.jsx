import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let count=0
const root= createRoot(document.getElementById('root'))
function Counter (){
   const handleClick=()=>{
    console.log(count)//0 1
    count++//1
    root.render(<Counter/>)
    console.log(count)//12
  }
  return <>
    <h1>counter:{count}</h1>
    <button onClick={handleClick}>click</button>
    </>
  
}

root.render(<Counter/>)



