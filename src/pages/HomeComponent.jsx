import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlantImage from '../assets/plant.jpg';
import { Box, Typography, Button, Card, CardContent } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  image: {
    paddingLeft: theme.spacing(2),
    maxWidth: "80%",
    height: "auto",
    align: 'right',
    color: theme.palette.text.secondary,
  },
  imageProduct: {
    paddingLeft: theme.spacing(2),
    maxWidth: "80%",
    height: "auto",
    align: 'right',
    color: theme.palette.text.secondary,
  }
}));

function Home({ history }) {
  const classes = useStyles()
  return <React.Fragment>
    <Card classes={classes} spacing={5}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5}>
            <img className={classes.image} src={PlantImage} alt="Plant"></img>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" color="primary"> Promo </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                    </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card classes={classes} spacing={5}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" color="primary"> Promo </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                    </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img className={classes.image} src={PlantImage} alt="Plant"></img>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Grid container justify="space-around" spacing={5}>
      {recommenededItems(classes, history)}
    </Grid>

  </React.Fragment>
}

function recommenededItems(classes, history) {
  return <React.Fragment>
    <Grid item xs={11} ><Typography variant="h5" in>Recommended products</Typography></Grid>
    {similarItem(classes, history)}
    {similarItem(classes, history)}
    {similarItem(classes, history)}
  </React.Fragment>

}

function similarItem(classes, history) {
  return <Grid item xs={5} md={3}>
    <Paper classes={classes.paper}>
      <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
        <img className={classes.image} src={PlantImage} alt="Plant"></img>
        <Box>Product Name</Box>
        <Box> $Price</Box>
          <Box>
            <Button color="primary" onClick={() => history.push('/product')}>
              Quick checkout
        </Button>
          </Box>
      </Grid>
    </Paper>
  </Grid>
}

export default withRouter(Home)