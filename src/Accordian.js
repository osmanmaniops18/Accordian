import React, { useState } from "react";
import { data } from "./api";
import MyAccordian from "./MyAccordian"
import "./accordian.css"


const Accordian=()=>{

    const [show,setshow]=useState(data);


    return(
        <>
       <section className="main-div">
       <h1 className="header">React Interview</h1>
      {

          show.map((value)=>{
              return <MyAccordian
               key={value.id}
               {...value}
               />
       
      })


      }
</section>
        </>
    )
}


export default Accordian;