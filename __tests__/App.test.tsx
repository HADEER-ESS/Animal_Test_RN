/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import { expect, it } from '@jest/globals';

import { render } from '@testing-library/react-native';

it('renders correctly', async () => {
  const { getByTestId } = render(<App />);

  const list = await getByTestId("render_data_list");

  expect(list).toBeTruthy();
});
