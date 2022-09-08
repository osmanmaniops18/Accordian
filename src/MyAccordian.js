import React, { useState } from "react";
import "./accordian.css"

const MyAccordian=(props)=>{
    const[showvalue,setvalue]=useState(false)
    return(
        <>
        <div className="main-heading">
        <p onClick={()=>setvalue(!showvalue)}>{showvalue? "➖": "➕"}</p>
        <h3>{props.question}</h3>
        </div>
        {
       
       showvalue &&    <p className="answers">{props.answer}</p>
        }  
        </>
    )
}

export default MyAccordian;