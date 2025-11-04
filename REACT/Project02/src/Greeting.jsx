import React, { useState } from "react";

function Greetings() {
  const [message, setMessage] = useState('hello class');
  
  function changeMessage() {
    setMessage('You clicked the button!');
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold">{message}</h1>
      <button 
        onClick={changeMessage}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}

export default Greetings;
