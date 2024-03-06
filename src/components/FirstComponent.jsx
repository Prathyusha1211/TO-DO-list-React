import { useRef, useState } from "react"


const FirstComponent = ({data,fn}) => {
    const [list,setData]=useState([]);
    const inputRef=useRef(null);
  return (
    
    <div>
        <button onClick={()=>{fn(0)}}>Set 0</button>
      {data}
      <br></br>
      <input ref={inputRef} type="text"/>
      <button onClick={()=>{setData([...list,inputRef.current.value])}}>Submit</button>
        {list.map((item)=>{return <h2>{item}</h2>})}
    </div>
  )
}

export default FirstComponent
