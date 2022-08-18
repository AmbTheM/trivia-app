import React from "react"
import ReactDOm from "react-dom"


interface Props
{
        InputClass: string;
        maxLength: number;
        placeHolder?: string;


}

const InputBox: React.FC<Props> = ({InputClass, maxLength, placeHolder}) =>{

    return (
        <>
        <input className={InputClass} maxLength={maxLength} placeholder = {placeHolder}>
        </input>
        </>
    )
}

export default InputBox;