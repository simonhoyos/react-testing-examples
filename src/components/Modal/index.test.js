import React from 'react';
import {
  render,
  fireEvent,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Modal } from './index';

describe('Modal', () => {
  it('should open and close modal', () => {
    const { container, getByText, queryByTestId, getByTestId } = render(<Modal />);

    const open = getByText('Open');
    expect(queryByTestId('modal')).not.toBeInTheDocument();

    fireEvent.click(open);

    expect(getByTestId('modal')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })
})
