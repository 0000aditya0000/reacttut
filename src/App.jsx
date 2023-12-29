import React, { useState } from "react";
import Form from "./Forms";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
import {defineCustomElements} from "luciferwebcomponent/loader";
import DigitalClock from "./Digital";
import './Card.css'
import './index.css'





const App = () => {
 

  return (
    <>
    <Netflix/>
    <Amazon/>
    <Netflix/>
    <Amazon/>
    <Netflix/>
    <Amazon/>
    <Netflix/>
    <Amazon/>
    </>
  );
};

export default App;

defineCustomElements(window);

