import React from "react"
import ReactDOm from "react-dom"


interface Props
{
    DisplayText: string;
    key?:number;
    onClick: (e:any) => void;

}

const Button: React.FC<Props> = ({DisplayText, key, onClick}) =>{

    return (
        <>
        <div className="button-shape" key={key} onClick={onClick}>
            {DisplayText}
        </div>
        </>
    )
}

export default Button;