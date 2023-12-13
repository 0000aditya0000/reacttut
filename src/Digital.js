import React, { useState } from "react";



function DigitalClock(){
    var date  = new Date().toLocaleTimeString();
   // console.log(date);
    const state = useState();
    const [currDate,setCount] = useState(date);
   

    setInterval( function incNum(){
        let ddate = new Date().toLocaleTimeString();
        setCount(ddate);
    },1000);
    return (
        <h1>{date}</h1>
    )
}

export default DigitalClock;