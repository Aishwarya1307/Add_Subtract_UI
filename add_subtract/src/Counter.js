import React, { useState } from "react";
import './App.css';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((currentCount) => currentCount + 1);
    props.incCounter();
    // 
  };

  const decrementCounter = () => {
    setCount((currentCount) => currentCount - 1);
    props.decCounter();
  };

  return (

    <div className="Counter">
      <div>{count}</div>
      <button type="button" color="red" onClick={incrementCounter}>+</button>
      &nbsp;
      &nbsp;
      <button type="button" class="btn btn-danger" onClick={decrementCounter}>-</button>
    </div>
    
  );
};


export default Counter;
