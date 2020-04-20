import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

export default function PasswordOptions(props) {
  const options = props.options;

  function checkboxChanged(event) {
    props.changeHandler({
      ...props.options,
      [event.target.name]: event.target.checked,
    });
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={options.uppercase}
            onChange={checkboxChanged}
            name="uppercase"
            color="secondary"
          />
        }
        label="Uppercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.lowercase}
            onChange={checkboxChanged}
            name="lowercase"
            color="secondary"
          />
        }
        label="Lowercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.numbers}
            onChange={checkboxChanged}
            name="numbers"
            color="secondary"
          />
        }
        label="Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.symbols}
            onChange={checkboxChanged}
            name="symbols"
            color="secondary"
          />
        }
        label="Symbols"
      />
    </FormGroup>
  );
}
