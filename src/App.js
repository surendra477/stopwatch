import React, { useState, useRef } from "react";


function App() {

  const [timer, setTimer] = useState(0);

  const increment = useRef(null);

  const handlerstart = (e) => {
  
  increment.current = setInterval(() => {
    setTimer((timer) => timer + 1);
  }, 10);
  };
  
  const handlerstop = () => {
     clearInterval(increment.current);
    
  };
  
  const handlerpause = () => {
    clearInterval(increment.current);
   
  };
  
  const handlerrestart = () => {
    clearInterval(increment.current);
    setTimer(0);
    handlerstart()
  };
  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => handlerstart()}>Start</button>
     
      <button onClick={() => handlerpause()}>pause</button>
      <button onClick={() => handlerrestart()}>restart</button>
    </div>
  );
}

export default App;
