import React from "react";
import ReactDOM from "react-dom";
import Button from "../../Components/Button/Button";
import OptionsList from "../../Components/Options/OptionsList";
import style from "./GamePage.less";

const testarray: string[] = ["a", "b", "c", "d"];

const GamePage: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.mainframe}>
          <p className={style.question}>
            hguykdyjdliuskekusjtyrdrjtyfhtdkurytdurfkydukjyduyjhd
            hddgfccyhrfhchgutdhfchgfduff{" "}
          </p>
          <OptionsList
            optionlistStyle={style.optionlist}
            optionsarray={testarray}
            buttonClass={style.button}
            buttonTextClass={style.buttontext}
            onClick={() => {
              console.log("hehe");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default GamePage;
