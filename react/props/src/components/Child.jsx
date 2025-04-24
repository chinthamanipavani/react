 function Child({name,age,obj}){
    // console.log(props.parent.grandparent.name)
    console.log(obj[0].sname)
return <div>
    <p>{name}</p>
    <p>{age}</p>
    <p>{obj[0].sname}</p>
</div>
 }
 export default Child;