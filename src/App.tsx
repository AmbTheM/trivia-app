import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button/Button";
const App: React.FC = () => {
  return (
    <>
    <div>
        <h2>Trivia App</h2>
        <p>Less go</p>
        <Button key={1} DisplayText="" onClick={(e) => console.log("Help")}/> 
    </div>
    </>
  );
};

export default App;
