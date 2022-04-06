import React from "react";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import FavoriteInput from "./Form";

describe("Favourite Input",()=>{
  it('calls onChange correct number of times',()=>{
    const onChangeMock=jest.fn();
    render(<FavoriteInput onChange={onChangeMock}/>)
    const input = screen.getByRole('textbox');

    userEvent.type(input,"Lion");

    expect(onChangeMock).toHaveBeenCalledTimes(4)
  });

  it("calls onChange with correct argument(s) on each input",()=>{
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock}/>)
    const input = screen.getByRole('textbox');
    userEvent.type(input,'OX');

    expect(onChangeMock).toHaveBeenNthCalledWith(1,'O')
    expect(onChangeMock).toHaveBeenNthCalledWith(2,'OX')
    // input = 'OX'
    // first argument to be O
    // second argument to be OX
  });

  it("input has correct values",()=>{
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock}/>)
    const input = screen.getByRole('textbox');

    userEvent.type(input,'OX');

    expect(input).toHaveValue('OX');
  });
  
})