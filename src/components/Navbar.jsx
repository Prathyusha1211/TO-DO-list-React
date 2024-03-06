
import { useState } from "react";
import FirstComponent from "./FirstComponent";

let x=" Hello world"
let array=["user1","user2","user3"]
let data="girl";

const Navbar = () => {
    const [y,sety]=useState(0);
    const btnclick=()=>{
        console.log("clicked")
        sety(y+1)
        console.log(y)
    }

  return (
    <div>
      navbar
      {x}
      {array.map((user)=>{return <h2>{user}</h2>})}
      {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}
      <button onClick={()=>{btnclick()}}>Click me</button>
      {y}
      <FirstComponent data={y} fn={sety}/>
  
    </div>
  )
}

export default Navbar
