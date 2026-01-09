import { useState } from "react";
import "./index.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;

      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      return;
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      return;
    }
  };

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <h2>Counter Value : {counter}</h2>

        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value {counter}</button>
        <p>footer : {counter}</p>
      </div>
    </>
  );
}

export default App;
