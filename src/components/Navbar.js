import React, { Component } from "react";
import logo from "../assets/GreenKartLogo_transparent.png";
import "./Navbar.css";
import { Link, withRouter } from "react-router-dom";
import { ShoppingBasket } from "@material-ui/icons";
import Axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.valueChanged = this.valueChanged.bind(this);
  }

  //updates the value variable each time text input changes
  valueChanged(e) {
    this.setState({ value: e.target.value });
  }

  logoutApi = (e) => {
    Axios.post("/logout", {})
      .then((res) => {
        this.props.userLoggedIn(false);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { value } = this.state;
    const searchString = "/search/" + value + "";
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ width: 170 }} alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item listItem" href="/search/plant">
                    Plants
                  </a>
                  <a className="dropdown-item listItem" href="/search/seed">
                    Seeds
                  </a>
                  <a className="dropdown-item listItem" href="/search/tool">
                    Tools
                  </a>
                  <a className="dropdown-item listItem" href="/search/soil">
                    Soil
                  </a>
                  <a className="dropdown-item listItem" href="/search/hose">
                    Hose
                  </a>
                  <a className="dropdown-item listItem" href="/search/pest">
                    Pest Control
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="input"
              name="search"
              id="search"
              onChange={this.valueChanged}
              placeholder="search"
              aria-label="Search"
            />
            <Link to={searchString}>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "flex-end", marginTop: "-6px" }}
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                {this.props.isLoggedIn === true &&
                this.props.isAdmin === false ? (
                  <Link className="navbar-brand  ml-5 mt-2" to="/cart">
                    <ShoppingBasket color="primary" fontSize="large" />
                  </Link>
                ) : null}
              </li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown ml-4 mt-3">
                <span
                  className="nav-link dropdown-toggle text-white"
                  style={{ marginTop: "-5px" }}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.props.isLoggedIn === true ? (
                    <div
                      className="dropdown-item ponter"
                      onClick={this.logoutApi}
                    >
                      Logout
                    </div>
                  ) : (
                    <Link className="dropdown-item" to="/signin">
                      Login
                    </Link>
                  )}
                  {this.props.isLoggedIn === true &&
                  this.props.isAdmin === false ? (
                    <Link className="dropdown-item" to="/user">
                      User Management
                    </Link>
                  ) : null}
                  <Link className="dropdown-item " to="/contact">
                    Contact us
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
