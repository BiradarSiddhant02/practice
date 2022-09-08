import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {


  
  const [color, setColor] = useState("red");

  return (
    <>
      <h1 style = {{color : {color}}}>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );


}
export default App;
