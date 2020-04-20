import React from 'react';
import { Typography, FormGroup, TextField } from '@material-ui/core';

export default function PasswordLength(props) {
  const handleChange = (event) => {
    props.changeHandler(event.target.value);
  };

  return (
    <FormGroup>
      <Typography gutterBottom>Password Length</Typography>
      <TextField
        type="number"
        defaultValue="0"
        value={props.size}
        onChange={handleChange}
      />
    </FormGroup>
  );
}
