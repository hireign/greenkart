import React, {useEffect, useState} from "react";
import "./ProductListing.css";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {getRatingByID} from "../services/CommentService";
import { Link } from "react-router-dom";

function ProductListing(props) {
  const productId = props.productId;
  const [rating, setRating] = useState([]);
  const productPage = "/product/" + productId + "";

    useEffect(() => {
      // setRating(0)
      getRatingByID(productId).then((result) =>
        setRating(result.rating)
      );
    }, []);

    if(null == rating){
      setRating(0)
    }
    console.log("rating for "+productId+" = "+rating)
    
    if(rating==5){
      let star = document.getElementsByClassName("five");
      for(var i = 0; i < star.length; i++)
      {
        star[i].classList.add('checked');
      }
    }
    else if(rating==4){
      let star = document.getElementsByClassName("four");
      for(var i = 0; i < star.length; i++)
      {
        star[i].classList.add('checked');
      }
    }
    else if(rating==3){
      let star = document.getElementsByClassName("three");
      for(var i = 0; i < star.length; i++)
      {
        star[i].classList.add('checked');
      }
    }
    else if(rating==2){
      let star = document.getElementsByClassName("two");
      for(var i = 0; i < star.length; i++)
      {
        star[i].classList.add('checked');
      }
    }
    else if(rating==1){
      let star = document.getElementsByClassName("one");
      for(var i = 0; i < star.length; i++)
      {
        star[i].classList.add('checked');
      }
    }

    return (
    <div className="col mb-4 productlisting">
      <div className="card h-100">
        <Link to={productPage}>
          <img src={props.productImage} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5 className="card-title cardTitle">{props.productName}</h5>
          <h6 className="cardCategory">{props.category}</h6>

          <span className="fa fa-star one two three four five"></span>
          <span className="fa fa-star two three four five"></span>
          <span className="fa fa-star three four five"></span>
          <span className="fa fa-star four five"></span>
          <span className="fa fa-star five"></span>
          <br />
          <h3 className="">${props.productPrice}</h3>
          <div className="hiddenCheckout" style={{ textAlign: "center" }}>
            <Grid>
              <Button variant="contained" color="primary" onClick="">
                Quick Checkout
              </Button>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
