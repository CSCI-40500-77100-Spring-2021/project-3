import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    
    waitFor,
  } from '@testing-library/dom'
  
import '@testing-library/jest-dom/extend-expect'
import LoginControl from "../components/login_control.component";

const setup = () => {
  const utils = render(<LoginControl/>)
  const input = utils.getByTestId('name')
  return {
    input,
    ...utils,
  }
  }

afterEach(cleanup);

test('Properly gets username input data', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '$23' } })
  expect(input.value).toBe('$23')

})

test('Properly gets password data', () => {
    const { getByTestId } = render(<LoginControl/>);
    expect(getByTestId('password')).toHaveValue('monkey');

})

test('Properly captures form values', () => {
    const { getByTestId } = render(<LoginControl/>);
    expect(getByTestId('login-form')).toHaveFormValues({
        username: '',
        password: 'monkey',
      })

})


test('Properly shows style', () => {
    const { getByTestId } = render(<LoginControl/>);
    expect(getByTestId('submit-button')).not.toHaveStyle(`
    background-color: blue;
    display: none;
  `)

})

test('Properly shows style', () => {
    const { getByTestId } = render(<LoginControl/>);
    expect(getByTestId('submit-button')).not.toHaveStyle(`
        outline: none;
        border: none;
        cursor: pointer;
        width: 100%;
        height: 60px;
        border-radius: 30px;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        text-align: center;
        background-color: #24cfaa;
        box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;	
  `)

})


