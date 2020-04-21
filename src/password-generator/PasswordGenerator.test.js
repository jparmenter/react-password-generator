import React from 'react';
import { shallow } from 'enzyme';
import PasswordGenerator from './PasswordGenerator';
import { Typography } from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import Refresh from '@material-ui/icons/Refresh';
import PasswordLength from './PasswordLength';
import PasswordOptions from './PasswordOptions';

describe('PasswordGenerator', () => {
  const defaultText = 'Please select a password option';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PasswordGenerator />);
  });

  it('should set a password by default', () => {
    const passwordElement = wrapper.find(Typography);

    expect(passwordElement.text()).not.toEqual(
      'Please select a password option'
    );
  });

  describe('copyToClipboard', () => {
    it('should call clipboard.writeText', () => {
      global.navigator.clipboard = {
        writeText: jest.fn(),
      };
      const clipBoardButton = wrapper.find(FileCopy).parent();
      clipBoardButton.simulate('click');

      expect(navigator.clipboard.writeText).toHaveBeenCalled();
    });
  });

  describe('refreshPassword', () => {
    it('should update password', () => {
      const oldPassword = wrapper.find(Typography).text();
      wrapper.find(Refresh).parent().simulate('click');
      const newPassword = wrapper.find(Typography).text();

      expect(oldPassword).not.toEqual(defaultText);
      expect(newPassword).not.toEqual(defaultText);
      expect(oldPassword).not.toEqual(newPassword);
    });
  });

  describe('sizeChanged', () => {
    it('should update size changed and old password', () => {
      const size = 20;
      const oldPassword = wrapper.find(Typography).text();
      const passwordLength = wrapper.find(PasswordLength);
      passwordLength.props().changeHandler(size);
      wrapper.update();
      const newPassword = wrapper.find(Typography).text();

      expect(newPassword.length).toEqual(size);
      expect(oldPassword).not.toEqual(newPassword);
    });
  });

  describe('optionsChanged', () => {
    it('should set default string when options are false', () => {
      const passwordOptions = wrapper.find(PasswordOptions);
      passwordOptions.props().changeHandler({
        uppercase: false,
        lowercase: false,
        symbols: false,
        numbers: false,
      });
      const password = wrapper.find(Typography).text();

      expect(password).toEqual(defaultText);
    });
  });
});
