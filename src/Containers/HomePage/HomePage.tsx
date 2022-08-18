import React from "react";
import ReactDOM from "react-dom";
import Button from "../../Components/Button/Button";
import style from "./HomePage.less";
import InputBox from "../../Components/InputBox/InputBox";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.mainframe}>
          <h1 className={style.titleheader}>Carbonteq Trivia Game</h1>
          <InputBox
            InputClass={style.input}
            maxLength={25}
            placeHolder="Please Enter Your Name"
          />
          <Button
            buttonClass={style.buttonplay}
            buttonTextClass={style.buttontext}
            DisplayText="Play"
            onClick={() => {}}
          />
          <Button
            buttonClass={style.buttonsettings}
            buttonTextClass={style.buttontext}
            DisplayText="Settings"
            onClick={() => {}}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default HomePage;
