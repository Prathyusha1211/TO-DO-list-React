import React, { useState } from 'react'

export default function FBC(props) {
    
    let[state,changeState]=useState()
    state=" first unchecked"
    changeState=()=>{
            console.log(" second unchecked")
            state=" second checked"
    }
  return (
    <div>
      <p>{state} This is a function based component {props.topic}{changeState()}{state}</p>
      
      
    </div>
  )
}

