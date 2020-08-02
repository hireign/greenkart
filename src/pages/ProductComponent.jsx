/**
 * @author [Shubham Suri](https://github.com/ssuri013)
 *
 *  Product Details page
 *  @param {number} productID
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
import { updateCart } from "../services/CartService"

import { useParams, useHistory } from 'react-router-dom';

// Styles 
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
    cursor: "pointer"
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
  },
  progressBar: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-50px",
      marginLeft: "-50px"
  }
}));

export default function (props) {
  const classes = useStyles();
  const { loggedIn } = useContext(OrderContext);
  const [open, setOpen] = useState(false);
  const [openText, setOpenText] = useState("");
  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState(null)
  const [similarProductInfo, setSimilarProductInfo] = useState([])
  let {id} = useParams()
  const history = useHistory();

  useEffect(() => {
    // code to run on component mount
    if (productInfo == null)
      ProductsService.getProductById(id)
        .then(data => data.json())
        .then(data => {
          setProductInfo(data);
          setLoading(false)
          return ProductsService.getSimilarProductById(data.productId)
        })
        .then(data => data.json())
        .then(data => setSimilarProductInfo(data))
        .catch(err => {
          setOpenText("Error during network call")
          setOpen(true);
          setLoading(false)
          setProductInfo("incorrect")
        });
  }, [productInfo, similarProductInfo, id])
  
  const handleClick = () => {
    if (!loggedIn.loggedIn) {
      setOpenText("Login to add to cart")
      setOpen(true);
    } else {
      updateCart(productInfo.productId, 1)
      setOpenText("added to cart")
      setOpen(true);
    }
  };

  const onBuy = () => {
    console.log("Product Info")
    console.log(productInfo)
    console.log(id)
    if (!loggedIn.loggedIn) {
      setOpenText("Login to Buy")
      setOpen(true);
    } else {
      history.push('/payment/'+id+"/"+productInfo.salePrice+"/"+productInfo.title);
      history.go()
     // props.history.push(`/payment/${this.state.param2}/${this.state.param1}/${this.state.param3}/${this.state.userEmailId}`)
    }
  };


  function handleClose() {
    setOpen(false);
  };

  if(loading) {
    return  <div className={classes.progressBar}>
      <CircularProgress />
      </div>
  }

  if(productInfo === "incorrect") {
    return <React.Fragment>
      <div>
        <Typography variant="h4" color="primary"> Incorrect Product ID </Typography> 
       </div>
      </React.Fragment>
  }

  return <div className={classes.root}>
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} md={5}>
        <img className={classes.image} src={productInfo && productInfo.image} alt="Plant" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h4" color="primary"> {productInfo && productInfo.title} </Typography>
        <Link to={"/rating/" + productInfo.productId} >
          <Box component="div" mb={2} borderColor="transparent">
            <Grid alignContent="center" container justify="flex-start">
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="body1" component="span" className={classes.ratingText}>20 ratings and 12 reviews</Typography>
            </Grid>
          </Box>
        </Link>
        <Typography variant="h5"> Price: ${productInfo && productInfo.salePrice}</Typography>
        <Typography variant="h6"></Typography>
        <Typography variant="body2">
          {productInfo && productInfo.description}
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item><Button variant="contained" color="primary" onClick={handleClick}>Add to cart</Button>
          </Grid>
          <Grid item><Button variant="contained" color="primary" onClick={onBuy}>Buy</Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          {openText}
        </MuiAlert>
      </Snackbar>
      {
        similarProductInfo.length > 0 && 
        <React.Fragment>
        <Grid item xs={12}><Typography variant="h5">Similar Items</Typography></Grid>
          {similarProductInfo.map(item => similarItem(classes, item, history))}
        </React.Fragment>
      }
    </Grid>
    {/* <Comment/> */}
  </div>
}

/**
 *  Create thumbnail for product item
 *  @param {CSS styles} classes
 *  @param {Product} productInfo
 *  @param {react-router-dom useHistory} history
 */
function similarItem(classes, product, history) {
  const handleClick = () => {
    history.push("/product/" + product.productId);
    history.go()
  }
  return <Grid item xs={8} sm={5} md={3} onClick={handleClick} key={product.productId}>
    <Paper classes={{ root: classes.subPaper }}>
      <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <img className={classes.image} src={(product && product.image)} alt="Plant"></img>
        </Grid>
        <Grid item>
          <Box>{ product.title}</Box>
        </Grid>
        <Grid item>
          <Box> {product.salePrice}</Box>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
}
