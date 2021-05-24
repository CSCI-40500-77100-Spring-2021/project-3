import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    waitFor,
  } from '@testing-library/dom'
  
import '@testing-library/jest-dom/extend-expect'
import LoginControl from "./login_control.component";

const setup = () => {
  const utils = render(<LoginControl/>)
  const input = utils.getByTestId('name')
  return {
    input,
    ...utils,
  }
  }

afterEach(cleanup);

test('Properly gets input data', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '$23' } })
  expect(input.value).toBe('$23')

})

test('Properly gets password data', () => {
    const { getByTestId } = render(<LoginControl/>);
    expect(getByTestId('password')).toHaveValue('monkey');

})


