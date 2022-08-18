import { screen, render } from "@testing-library/react";
import InputBox from "../InputBox/InputBox";
import React from "react";

describe("rendering the input field", () => {
  test("Check test", () => {
    render(
        
        <InputBox InputClass="homepage-input" maxLength={25} placeHolder="Please Enter Your Name"/>
    );

    expect(screen.getByPlaceholderText("Please Enter Your Name")).toBeTruthy();
  });
});
