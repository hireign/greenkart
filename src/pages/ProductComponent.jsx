import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlantImage from '../assets/plant.jpg';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography, Button, Snackbar, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
  },
  subPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  image: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: "90%",
    height: "auto",
    align: 'right',
  },
  ratingText: {
    paddingLeft: theme.spacing(2)
  }
}));

export default function () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {

    setOpen(false);
  };
  return <div className={classes.root}>
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} md={5}>
        <img className={classes.image} src={PlantImage} alt="Plant" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Paper className={classes.paper}>
          <Typography variant="h4" color="primary"> Product Name </Typography>
          <Link to="/rating">
            <Box component="div" mb={3} borderColor="transparent">
              <Grid alignItem="center" container justify="flex-start">
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="body1" component="span" className={classes.ratingText}>20 ratings and 12 reviews</Typography>
              </Grid>
            </Box>
          </Link>
          <Typography variant="h5"> Price: 10$</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non faucibus odio, vel finibus elit. Nunc convallis est maximus sollicitudin cursus. Curabitur sed dolor velit. Nulla augue libero, pulvinar Integer at commodo metus. Fusce pharetra sit amet justo.
                    </Typography>
          <Grid container spacing={2}>
            <Grid item><Button variant="contained" color="primary" onClick={handleClick}>Add to cart</Button>
            </Grid>
            <Grid item><Button variant="contained" color="primary" onClick={handleClick}>Buy</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Product is added to cart! next page is currently unavailable!
        </MuiAlert>
      </Snackbar>
      <Grid item xs={12}><Typography variant="h5">Similar Items</Typography></Grid>
      {similarItem(classes)}
      {similarItem(classes)}
      {similarItem(classes)}
      {similarItem(classes)}
    </Grid>
  </div>
}

function similarItem(classes) {
  return <Grid item xs={8} sm={5} md={3}>
    <Paper classes={{ root: classes.subPaper }}>
      <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <img className={classes.image} src={PlantImage} alt="Plant"></img>
        </Grid>
        <Grid item>
          <Box>Product Name</Box>
        </Grid>
        <Grid item>
          <Box> $25</Box>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
}