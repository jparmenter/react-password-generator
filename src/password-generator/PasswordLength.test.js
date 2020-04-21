import React from 'react';
import PasswordLength from './PasswordLength';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';

describe('PasswordLength', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      size: 6,
      changeHandler: jest.fn(),
    };

    wrapper = shallow(<PasswordLength {...props} />);
  });

  it('should have a value of 6', () => {
    expect(wrapper.find(TextField).props().value).toEqual(props.size);
  });

  describe('handleChange', () => {
    it('should call changeHandler on text change', () => {
      wrapper.find(TextField).simulate('change', { target: { value: 10 } });
      expect(props.changeHandler).toHaveBeenCalled();
    });
  });
});
