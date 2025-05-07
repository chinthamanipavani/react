 import React ,{useState,useEffect} from 'react';
 function Products (){
    const [products,setProducts]=useState([])
const[count,setCount]=useState(0)     //display the product index
useEffect(()=>{
    let url="https://fakestoreapi.com/products"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
          setProducts(data)
    })
},[])
const handlePrevious=()=>{
    setCount(prev=>prev-1)//countwillbe decreases
}
const handleNext=()=>{
    setCount(prev=>prev+1)
}
const newProduct=products[count]



return <>
<h1 style={{color:"red"}}>products </h1>
{
newProduct?
<div 
style={{
border:"2px solid rgb(243, 243, 224)",
background:"rgb(243, 243, 224)",
borderRadius:"9px"

}}
>
<img src={newProduct.image} alt={newProduct.title} style={{height:"300px",width:"300px"}} />
<h3>{newProduct.title}</h3>
<h2>{newProduct.category}</h2>
{/* <p>{newProduct.rating}</p> */}
<p>{newProduct.description}</p>
</div>:
<p>
products are not available
</p>
}

<button 
style={{
    border:"2px solid red",
    margin :"20px",
    color:"white",
    background:count<=0?"grey":"red"
    }} 
    disabled={count<=0 } onClick={handlePrevious} >
        prev
</button>
<button style={
    {
        border:"2px solid green",
        margin :"20px",
        background:count>=20?"grey":"green",
        color:"white"
        }
        }  
        disabled={count>=20 }onClick={handleNext}>
            Next
            </button>
</>
 }
 export default Products;