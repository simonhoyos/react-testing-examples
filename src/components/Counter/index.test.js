import React from 'react';
import {
  render,
  fireEvent
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Counter } from './index';

describe('Counter', () => {
  it('should increase count and update UI', () => {
    const { getByTestId } = render(<Counter />);

    const button = getByTestId('button');
    const counter = getByTestId('counter');

    fireEvent.click(button);

    expect(counter).toHaveTextContent('1');
  });
});
