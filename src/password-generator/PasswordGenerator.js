import React, { useState } from 'react';
import { generate } from '../common/password';
import { Box, Grid, Button, Typography, makeStyles } from '@material-ui/core';
import FileCopy from '@material-ui/icons/FileCopy';
import Refresh from '@material-ui/icons/Refresh';
import PasswordOptions from './PasswordOptions';
import PasswordLength from './PasswordLength';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  passwordContainer: {
    marginBottom: theme.spacing(2),
  },
}));

export default function PasswordGenerator() {
  const classes = useStyles();
  const [size, setSize] = useState(9);
  const [options, setOptions] = useState({
    lowercase: true,
    numbers: true,
    symbols: true,
    uppercase: true,
  });
  const [password, setPassword] = useState(generate(options, size));

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
  }

  function refreshPassword(_options, _size) {
    setPassword(generate(_options, _size));
  }

  function optionsChanged(_options) {
    setOptions(_options);
    refreshPassword(_options);
  }

  function sizeChanged(_size) {
    setSize(_size);
    refreshPassword(options, _size);
  }

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.passwordContainer}
      >
        <Typography>
          {password ? password : 'Please select a password option'}
        </Typography>

        <Box>
          <Button onClick={copyToClipboard}>
            <FileCopy />
          </Button>
          <Button onClick={() => refreshPassword(options)}>
            <Refresh />
          </Button>
        </Box>
      </Grid>

      <Grid container direction="row" justify="space-around">
        <PasswordOptions options={options} changeHandler={optionsChanged} />
        <PasswordLength size={size} changeHandler={sizeChanged} />
      </Grid>
    </Grid>
  );
}
