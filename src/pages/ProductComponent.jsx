/**
 * Service for product related API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Typography, Button, Snackbar, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import Rating from '@material-ui/lab/Rating';
// import Comment from '../components/Comment';
import { OrderContext } from '../contexts/OrderContext';
import ProductsService from "../services/ProductService"
import { useParams } from 'react-router-dom'

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

export default function (props) {
  const classes = useStyles();
  const { loggedIn } = useContext(OrderContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState(null)
  const [similarProductInfo, setSimilarProductInfo] = useState([])
  let {id} = useParams()
  console.log(id)
  useEffect(() => {
    // code to run on component mount
    if (productInfo == null)
      ProductsService.getProductById(1)
        .then(data => data.json())
        .then(data => {
          setProductInfo(data);
          setLoading(false)
          return ProductsService.getSimilarProductById(data.productId)
        })
        .then(data => data.json())
        .then(data => setSimilarProductInfo(data));
  }, [productInfo, similarProductInfo])
  
  const handleClick = () => {
    if (!loggedIn) {
      alert("Login First");
    } else {
      setOpen(true);
    }
  };

  function handleClose() {
    setOpen(false);
  };

  if(loading) {
    return  <div className={classes.root}>
      <CircularProgress />
      </div>
  }

  if(productInfo === "incorrect") {
    return  <div className={classes.root}>
      error
      </div>
  }

  return <div className={classes.root}>
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} md={5}>
        <img className={classes.image} src={productInfo && productInfo.image} alt="Plant" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h4" color="primary"> {productInfo && productInfo.title} </Typography>
        <Link to="/rating">
          <Box component="div" mb={3} borderColor="transparent">
            <Grid alignItem="center" container justify="flex-start">
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="body1" component="span" className={classes.ratingText}>20 ratings and 12 reviews</Typography>
            </Grid>
          </Box>
        </Link>
        <Typography variant="h5"> Price: {productInfo && productInfo.salePrice}$</Typography>
        <Typography variant="h6"></Typography>
        <Typography variant="body2">
          {productInfo && productInfo.description}
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item><Button variant="contained" color="primary" onClick={handleClick}>Add to cart</Button>
          </Grid>
          <Grid item><Button variant="contained" color="primary" onClick={handleClick}>Buy</Button>
          </Grid>
        </Grid>
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
    {/* <Comment/> */}
  </div>
}

function similarItem(classes, product) {
  return <Grid item xs={8} sm={5} md={3}>
    <Paper classes={{ root: classes.subPaper }}>
      <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <img className={classes.image} src={product && product.image} alt="Plant"></img>
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
