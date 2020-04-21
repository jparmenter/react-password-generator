import React from 'react';
import PasswordOptions from './PasswordOptions';
import { shallow } from 'enzyme';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { render } from '@testing-library/react';

describe('PasswordOptions', () => {
  let props;

  beforeEach(() => {
    props = {
      options: {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
      },
      changeHandler: jest.fn(),
    };
  });

  it('should set the checkboxes', () => {
    const { container } = render(<PasswordOptions {...props} />);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
      expect(checkbox.checked).toBeTruthy();
    });
  });

  describe('checkboxChanged', () => {
    it('should call changeHandler with updated options', () => {
      const { container } = render(<PasswordOptions {...props} />);
      const uppercaseCheckbox = container.querySelector(
        'input[name="uppercase"]'
      );

      uppercaseCheckbox.click();

      expect(props.changeHandler).toHaveBeenCalledWith({
        ...props.options,
        uppercase: false,
      });
    });
  });
});
