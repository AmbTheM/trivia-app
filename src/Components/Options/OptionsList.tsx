import React from "react";
import ReactDOm from "react-dom";
import Button from "../Button/Button";

interface Props {
  optionsarray: string[];
  onClick: (e: any) => void;
  buttonClass: string;
  buttonTextClass: string;
  optionlistStyle: string;
}

const OptionsList: React.FC<Props> = ({
  optionsarray,
  onClick,
  buttonClass,
  buttonTextClass,
  optionlistStyle,
}) => {
  return (
    <div className={optionlistStyle}>
      {optionsarray.map((item, index) => {
        return (
          <Button
            buttonClass={buttonClass}
            buttonTextClass={buttonTextClass}
            key={index}
            DisplayText={optionsarray[index]}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default OptionsList;
