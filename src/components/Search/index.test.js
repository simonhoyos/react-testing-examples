import React from 'react';
import {
  render,
  fireEvent
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Search } from './index';

describe('Search', () => {
  it('should perform search onSubmit', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Search onSubmit={handleSubmit} />);

    const input = getByLabelText('Search');
    const button = getByText('Submit');

    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith({ searchTerm: 'hello' });
  })
})
