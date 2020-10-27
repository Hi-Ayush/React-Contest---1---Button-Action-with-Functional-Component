import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isRenderPara, setIsRenderPara] = React.useState(false);
  function handleClick() {
    setIsRenderPara(true);
  }

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click Me
      </button>
      {isRenderPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
