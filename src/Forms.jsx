import React from "react";
import { useState } from "react";
function Form(){
    const [name,setName] = useState("");
    const [fullName,setFullname] = useState();
    const inputEvent = (event) =>{
        setName(event.target.value);
    }
   
    const onSubmit = () =>{
        setFullname(name);
    }
    return(<>
          
        <div>
            <h1>Hello world Test{fullName}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={inputEvent} />
            <button onClick={onSubmit}>Click Me</button>
        </div>
    </>
    )
}

export default Form;