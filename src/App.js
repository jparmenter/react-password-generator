import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <Container maxWidth="md" fixed>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        style={{ backgroundColor: "#cfe8fc", height: "50vh" }}
      >
        <Typography variant="h1" component="h1" style={{ fontSize: '5rem' }}>
          Password Generator
        </Typography>
      </Grid>
    </Container>
  );
}

export default App;
