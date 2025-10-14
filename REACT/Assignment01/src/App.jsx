import React, { useState } from 'react'
import reactLogo from './assets/react.svg'; 

const App = () => {

  const [count, setCount] = useState(0);
  function handleIncrease(){
    setCount(c => c+2);
  }
  function handleReset(){
    setCount(0);
  }
  function handleDecrease(){
    setCount(c => c-2);
  }


  return (
    <div>
      <div className='main-heading'>
        <img src={reactLogo}alt="react-img" />
        <h2>React Turorial</h2> 
      </div>
      <div className="topic-container">
        <h1>TOPICS</h1>
        <ul> 
          <li>React Fundamental</li>
          <li>React hooks</li>
          <li>Rendering</li>
          <li>Rendering</li>
          <li>Rendering</li>
        </ul>
      </div>

      <div className="Counter-div">
        <span>{count}</span>
        <div className="btn-div">

          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleReset}> Reset</button>
          <button onClick={handleDecrease}>Decrease</button>     
        </div>
      </div>
    </div>
  )
}

export default App
