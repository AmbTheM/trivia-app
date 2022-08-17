import React from "react";
import ReactDOM from "react-dom";
import Button from "../../Components/Button/Button";
import  "./HomePage.less"
import  "../../Components/Button/Button.less"



const HomePage: React.FC = () => {
  return (
    <>
    <div className="container">
      <div className="mainframe">
            <h1 className="titleheader">Carbonteq Trivia Game</h1>
            <Button buttonClass="homepage-button-shape" buttonTextClass="homepage-button-text" DisplayText="Play" onClick={() => {}} />
      </div>
    </div>
    </>
  );
};

export default HomePage;
