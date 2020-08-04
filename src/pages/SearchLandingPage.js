import React, { Component } from "react";
import ProductListing from "../components/ProductListing";
import "./SearchLandingPage.css";
import { searchProduct } from "../services/SearchService";
import { withRouter } from "react-router-dom";

class SearchLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      products: [],
      count: "",
      value: this.props.match.params.queryterm,
    };
  }

  componentDidMount() {
    this.searchNow();
    this.forceUpdate();
  }

  //this will update the search results as soon as query string is changes
  componentDidUpdate() {
    if (this.state.value !== this.props.match.params.queryterm) {
      this.searchNow();
    } else if (this.state.products.length < 1) {
    }
  }

  //this method updates the value of queried string and call api to update product list
  searchNow() {
    this.setState({
      value: this.props.match.params.queryterm,
    });
    searchProduct(this.props.match.params.queryterm).then((result) =>
      this.setState({
        products: result,
        count: result.length,
      })
    );
  }

  sort = (e) => {
    let sortValue = e.target.value;
    if (sortValue === "Ascending by Name") {
      let sortedProducts = this.state.products.sort((a, b) => {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    } else if (sortValue === "Descending by Name") {
      let sortedProducts = this.state.products.sort((a, b) => {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    } else if (sortValue === "Price low to high") {
      let sortedProducts = this.state.products.sort((a, b) => {
        return parseInt(a.salePrice) - parseInt(b.salePrice);
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    } else if (sortValue === "Price high to low") {
      let sortedProducts = this.state.products.sort((a, b) => {
        return parseInt(b.salePrice) - parseInt(a.salePrice);
      });
      this.setState({
        products: sortedProducts,
      });
      this.forceUpdate();
    }
  };

  renderProducts() {
    return (
      <div id="productListing" className="productListBody">
        <div className="row row-cols-1 row-cols-md-4">
          {this.state.products.map((product) => (
            <ProductListing
              productName={product.title}
              productPrice={product.salePrice}
              productImage={product.image}
              productId={product.productId}
              category={product.category}
              rating={product.product_review}
              searchterm={this.state.value}
              key={product.productId}
            ></ProductListing>
          ))}
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <div id="mainDiv">
          <div id="my-row" className="row justify-content-right">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <h4>
                {this.state.count} results found for {this.state.value}
              </h4>
            </div>
            <div className="col-lg-3 offset-lg-5 col-md-4 offset-md-2 col-sm-4 offset-sm-2 col-xs-12">
              <select className="sort" onChange={this.sort} defaultValue="none">
                <option value="none" disabled hidden>
                  Sort
                </option>
                <option className="option" value="Ascending by Name">
                  Name - Ascending
                </option>
                <option className="option" value="Descending by Name">
                  Name - Descending
                </option>
                <option className="option" value="Price low to high">
                  Price - low to high
                </option>
                <option className="option" value="Price high to low">
                  Price - high to low
                </option>
              </select>
            </div>
          </div>
          {this.state.products.length > 0 ? (
            this.renderProducts()
          ) : (
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
              alt="error-message"
              src="https://dummyimage.com/900x500/cccccc/000000.png&text=Oops!+We+did+not+find+any+products+for+that.+Try+something+else.+Perhaps,+apples??"
            />
          )}
        </div>
      </>
    );
  }
}

export default withRouter(SearchLandingPage);
