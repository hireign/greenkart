import React, { Component } from "react";
import ProductListing from "../components/ProductListing";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SearchLandingPage.css";
import { searchProduct } from "../services/SearchService";
import { useParams, Redirect } from "react-router-dom";
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
    console.log("calling search");
    this.searchNow();
  }

  searchNow() {
    this.state.value = this.props.match.params.queryterm;
    searchProduct(this.state.value).then((result) =>
      this.setState({
        products: result,
        count: result.length,
      })
    );
  }

  sort = (e) => {
    console.log("Selected value:", e.target.value);
    let sortValue = e.target.value;
    if (sortValue == "Ascending by Name") {
      this.state.products = this.state.products.sort((a, b) => {
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
      this.forceUpdate();
    } else if (sortValue == "Descending by Name") {
      this.state.products = this.state.products.sort((a, b) => {
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
      this.forceUpdate();
    } else if (sortValue == "Price low to high") {
      this.state.products = this.state.products.sort((a, b) => {
        return parseInt(a.salePrice) - parseInt(b.salePrice);
      });
      console.log(this.state.products);
      this.forceUpdate();
    } else if (sortValue == "Price high to low") {
      this.state.products = this.state.products.sort((a, b) => {
        return parseInt(b.salePrice) - parseInt(a.salePrice);
      });
      console.log(this.state.products);
      this.forceUpdate();
    }
  };

  componentDidUpdate() {
    console.log("inside updte");
    if (this.state.value != this.props.match.params.queryterm) {
      console.log("value changed");
      this.searchNow();
    } else if (this.state.products.length < 1) {
      console.log("No results found");
      alert(
        "No results found for " +
          this.state.value +
          ". Please try another search!"
      );
    }
  }

  render() {
    return (
      <>
        <div id="mainDiv">
          <div className="row">
            <h4 style={{ margin: "6px", marginLeft: "100px" }}>
              {this.state.count} results found for {this.state.value}
            </h4>
            <select className="sort" onChange={this.sort}>
              <option value="none" selected disabled hidden>
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
            <select className="filter" onChange={this.filter}>
              <option value="none" selected disabled>
                Filters
              </option>
              <option value="Plants">Plants</option>
              <option value="Seeds">Seeds</option>
              <option value="Flowers">Flowers</option>
              <option value="Tools">Tools</option>
            </select>
          </div>
          <div id="productListing" className="productListing">
            <div class="row row-cols-1 row-cols-md-4">
              {this.state.products.map((product) => (
                <ProductListing
                  productName={product.title}
                  productPrice={product.salePrice}
                  productImage={product.image}
                ></ProductListing>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SearchLandingPage);

// export default SearchLandingPage;
