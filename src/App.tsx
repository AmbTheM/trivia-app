import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button/Button";
import getQuestions from "./Services/ApiCalling";
const App: React.FC = () => {
  return (
    <>
      <div>
        <h2>Trivia App</h2>
        <p>Less go</p>
        <Button
          key={1}
          DisplayText=""
          onClick={() => {
            console.log(getQuestions(5, "hard", 10));
          }}
        />
      </div>
    </>
  );
};

export default App;
