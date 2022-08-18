import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button/Button";
import HomePage from "./Containers/HomePage/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
const App: React.FC = () => {
  return (
    <>
    <Router><Routes><Route path="/" element={    <HomePage/>
}/></Routes></Router>
    </>
  );
};

export default App;
