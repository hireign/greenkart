import React, { useContext } from "react";
import "./ProductListing.css";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import { useHistory, withRouter } from "react-router-dom";

function ProductListing(props) {
  const { loggedIn } = useContext(OrderContext);
  const history = useHistory();
  const productId = props.productId;
  let rating = 0;
  const productPage = "/product/" + productId + "";

  rating = props.rating;
  if (null == rating) {
    rating = 0;
  } else {
    rating = parseInt(rating.rating);
  }

  //Function to send user to payment created by Jatin Rana
  const onBuy = () => {
    if (!loggedIn.loggedIn) {
      window.alert("To use the quick checkout, login first.");
      window.location.href = "/signin/" + props.searchterm;
    } else {
      history.push(
        "/payment/" +
          productId +
          "/" +
          props.productPrice +
          "/" +
          props.productName
      );
      history.go();
    }
  };

  return (
    <div className="col mb-4 productlisting">
      <div className="card h-100">
        <Link to={productPage} style={{ textDecoration: "none" }}>
          <img src={props.productImage} className="card-img-top" alt="..." />
          <div className="card-body product-card-body">
            <h5 className="card-title cardTitle">{props.productName}</h5>
            <h6 className="cardCategory">{props.category}</h6>
            {[0, 1, 2, 3, 4].map((i) => {
              return rating > i ? (
                <span className="fa fa-star checked"></span>
              ) : (
                <span className="fa fa-star"></span>
              );
            })}
            <br />
            <h3>${props.productPrice}</h3>

            <div className="hiddenCheckout" style={{ textAlign: "center" }}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={onBuy}>
                  Quick Checkout
                </Button>
              </Grid>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(ProductListing);
