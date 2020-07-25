import React from 'react';
import './ProductListing.css';
import {Link} from 'react-router-dom';

function ProductListing(props){
    return( 
  <div class="col mb-4 productlisting">
    <div class="card h-100">
    <Link to='/product'>
      <img src={props.productImage} class="card-img-top" alt="..."/>
      </Link>
      <div class="card-body">
        <h5 class="card-title">{props.productName}</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">${props.productPrice}</h3>
      </div>
    </div>
  </div>
)
}

export default ProductListing;