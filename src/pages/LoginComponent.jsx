import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Box, Link, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    height: "50%",
    margin: "0 auto",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
  outerDiv: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  image: {
    width: "100%",
    objectFit: "contain"
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  return (
    <Card classes={classes}>
      <Grid container classes={classes} alignContent="center" justify="center" alignItems="center">
        <Grid item xs="12" sm="10" md="10">
          <div className={classes.outerDiv}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={props.loginHandler}>
              <TextField
              type="email"
                variant="outlined"
                required
                margin="normal"
                label="Email Address"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                required
                margin="normal"
                label="Password"
                type="password"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Sign In
          </Button>
              <Box>
                <Link >
                  Forgot password?
              </Link>
              </Box>
              <Box>
                <Link>
                  Sign Up for new account
                  </Link>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}