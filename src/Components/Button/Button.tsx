import React from "react";
import ReactDOm from "react-dom";

interface Props {
  DisplayText: string;
  key?: number;
  onClick: (e: any) => void;
  buttonClass: string;
  buttonTextClass: string;
}

const Button: React.FC<Props> = ({
  DisplayText,
  key,
  onClick,
  buttonClass,
  buttonTextClass,
}) => {
  return (
    <>
      <div className={buttonClass} key={key} onClick={onClick}>
        <h1 className={buttonTextClass}>{DisplayText}</h1>
      </div>
    </>
  );
};

export default Button;
