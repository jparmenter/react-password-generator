import React, { useState } from 'react';
import { generate } from '../common/password';
import { Box, Grid, Button, Typography } from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import Refresh from '@material-ui/icons/Refresh';
import PasswordOptions from './PasswordOptions';
import './PasswordGenerator.css';

export default function PasswordGenerator() {
  const [options, setOptions] = useState({
    lowercase: true,
    numbers: true,
    symbols: true,
    uppercase: true,
  });
  const [password, setPassword] = useState(generate(options));

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
  }

  function refreshPassword(_options) {
    setPassword(generate(_options));
  }

  function optionsChanged(options) {
    setOptions(options);
    refreshPassword(options);
  }

  return (
    <Grid container direction="column" className="generator">
      <Grid container direction="row" justify="space-between">
        <Typography>{password}</Typography>

        <Box>
          <Button onClick={copyToClipboard}>
            <FileCopy></FileCopy>
          </Button>
          <Button onClick={() => refreshPassword(options)}>
            <Refresh></Refresh>
          </Button>
        </Box>
      </Grid>

      <PasswordOptions
        options={options}
        changeHandler={optionsChanged}
      ></PasswordOptions>
    </Grid>
  );
}
