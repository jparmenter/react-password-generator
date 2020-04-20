import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PasswordGenerator from './password-generator/PasswordGenerator';

function App() {
  return (
    <Container maxWidth="sm" fixed>
      <Grid container direction="column" justify="flex-start" className="App">
        <Typography variant="h1" component="h1">
          Password Generator
        </Typography>

        <PasswordGenerator></PasswordGenerator>
      </Grid>
    </Container>
  );
}

export default App;
