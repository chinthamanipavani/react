import { Component } from "react";

 class Cards extends Component{
render(){
    const arr=[
        {
            name:"kjsd",
            age:"67"
        },
        {
            name:"sd",
            age:"23"
        },
        {
            name:"bbsd",
            age:"7"
        }
    ]
    console.log(arr)
    return <>
    {arr.length>0 ?
    (
        <h1>{arr.map((ele,index)=>{
            return <>
            <p>{ele.name}</p>
            <p>{ele.age}</p>
            </>
        })}</h1>
    ):
    (
        <p>no cards are available</p>
    )
}
    </>
}
 }
 export default Cards;