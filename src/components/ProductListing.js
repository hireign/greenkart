import React from 'react';
import './ProductListing.css';
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import {Link} from 'react-router-dom';

function ProductListing(props){
  const productId = props.productId;
    const productPage = "/product/"+productId+"";
    return( 
  <div className="col mb-4 productlisting">
    <div className="card h-100">
    <Link to={productPage}>
      <img src={props.productImage} className="card-img-top" alt="..."/>
      </Link>
      <div className="card-body">
        <h5 className="card-title cardTitle">{props.productName}</h5>
        <h6 className="cardCategory">{props.category}</h6>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <br/>
        <h3 className="">${props.productPrice}</h3>
        <div className="hiddenCheckout" style={{textAlign: 'center'}}>
          <Grid>
              <Button variant="contained" color="primary" onClick="">
                  Quick Checkout
              </Button>
          </Grid>
        </div>
      </div>
    </div>
  </div>
)
}

export default ProductListing;
