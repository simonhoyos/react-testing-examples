import React from 'react';
import {
  render,
  waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Loading } from './index';

describe('Loading', () => {
  it('should show loading and change UI after 3 seconds', async () => {
    const { getByText, getByTestId } = render(<Loading />);

    const loading = getByText(/loading/i);
    expect(loading).toBeVisible();

    await waitForElement(() => getByTestId('loading'));

    expect(getByTestId('loading')).toBeInTheDocument();
  })
})
