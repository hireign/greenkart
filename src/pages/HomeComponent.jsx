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
    paddingRight: theme.spacing(2),
    width: "90%",
    height: "auto",
    color: theme.palette.text.secondary,
  }
}));

function Home({ history }) {
  const classes = useStyles()
  return <React.Fragment>
    <Card classes={{ root: classes.root }} spacing={5}>
      <CardContent>
        <Grid container spacing={3} alignItems="center" alignContent="center" justify="center">
          <Grid item xs={6} md={4}>
            <img className={classes.image} src={PlantImage} alt="Plant"></img>
          </Grid>
          <Grid item xs={8} md={8}>
            <Typography variant="h4" color="primary"> Promo </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                    </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card classes={{ root: classes.root }} spacing={5}>
      <CardContent>
        <Grid container spacing={3} alignItems="center" alignContent="center" justify="center">
          <Grid item xs={8} md={8}>
            <Typography variant="h4" color="primary"> Promo </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                    </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <img className={classes.image} src={PlantImage} alt="Plant"></img>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Grid container justify="space-around" spacing={3}>
      {recommenededItems(classes, history)}
    </Grid>
  </React.Fragment>
}

function recommenededItems(classes, history) {
  return <React.Fragment>
    <Grid item xs={11} ><div padding="20px"><Typography variant="h5" >Recommended products</Typography></div></Grid>
    {similarItem(classes, history)}
    {similarItem(classes, history)}
    {similarItem(classes, history)}
  </React.Fragment>

}

function similarItem(classes, history) {
  return <Grid item xs={8} sm={5} md={3}>
    <Paper classes={{ root: classes.paper }}>
      <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <img className={classes.image} src={PlantImage} alt="Plant"></img>
        </Grid>
        <Grid item>
          <Box>Product Name</Box>
        </Grid>
        <Grid item>
          <Box> $Price</Box>
        </Grid>
        <Grid item>
          <Box>
            <Button color="primary" variant="contained" onClick={() => history.push('/product')}>
              Quick checkout
        </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
}

export default withRouter(Home)
