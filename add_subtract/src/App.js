import './App.css';
import Counter from "./Counter";
import React, { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const incrementTotal = () => setTotal((currentTotal) => currentTotal + 1);
  const decrementTotal = () => setTotal((currentTotal) => currentTotal - 1);
  return (
    <div className="App">
      <div>
        
        <div className="Counter">
        <div onClick={incrementTotal} />
            &nbsp;
            &nbsp;
            <h2>Total of all the values</h2>
          <div onClick={decrementTotal}></div>
          <h4>Total Sum: {total}</h4>
        </div>
      
      {/* // condition ? true : false */}
      {/* plus ? + : - */}
      </div>
      
       
      <div className="CountersContainer">
        <Counter incCounter={incrementTotal} decCounter={decrementTotal} />
        <Counter incCounter={incrementTotal} decCounter={decrementTotal} />
        <Counter incCounter={incrementTotal} decCounter={decrementTotal} />
      </div>
    </div>
  );
};

export default App;
