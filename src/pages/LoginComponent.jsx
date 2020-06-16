import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Box, Link, Typography, TextField, Button } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    width: "max-content"
  },
  itemRoot: {
    marginTop: theme.spacing(1)
  }
}));

export default function SignIn(props) {
  const classes = useStyles();
  return (
    <Card classes={classes}>
      <Grid container classes={classes} direction="column" alignItems="center" justify="center" alignContent="center">
        <Grid item xs="12" sm="10" md="10">
          <FaceIcon color="primary"></FaceIcon>
        </Grid>
        <Grid item xs="12" sm="10" md="10">
          <Typography component="h1" variant="h5" color="primary">
            Sign in
            </Typography>
        </Grid>
        <form onSubmit={props.loginHandler}>
          <Grid item xs="12" classes={{ root: classes.itemRoot }}>
            <TextField
              type="email"
              variant="standard"
              required
              margin="none"
              label="Email Address"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs="12" classes={{ root: classes.itemRoot }}>
            <TextField
              variant="standard"
              required
              margin="none"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs="12" classes={{ root: classes.itemRoot }}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth>
              Sign In
          </Button>
          </Grid>
          <Grid item xs={12} classes={{ root: classes.itemRoot }}>
            <Box>
              <Link>
                <Typography variant="body2">
                  Forgot password?
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Link>
                <Typography variant="body2">
                  Sign Up for new account
                  </Typography>
              </Link>
            </Box>
          </Grid>
        </form>
      </Grid >
    </Card >
  );
}