import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';

test('renders app title', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Typography).text()).toEqual('Password Generator');
});
