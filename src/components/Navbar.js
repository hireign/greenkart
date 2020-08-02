import React, { Component } from "react";
import logo from '../assets/GreenKartLogo_transparent.png';
import './Navbar.css'
import { Link, withRouter } from 'react-router-dom';
import { ShoppingBasket } from '@material-ui/icons';
import Axios from 'axios';
import SearchLandingPage from '../pages/SearchLandingPage';

class Navbar extends Component {
    constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(e) {
    this.setState({value: e.target.value});
  }

  passValue(){
    console.log("passValue called")
  }

  logoutApi = (e) => {
    
    Axios.post('/logout', {})
    .then(res => {
      
      this.props.userLoggedIn(false)
      this.props.history.push("/");
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    const {value} = this.state;
    const searchString = "/search/"+value+""
    return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    
    <Link className="navbar-brand" to="/"><img src={logo} style={{ width: 170 }} /></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Products
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item listItem" href="/search/plant">Plants</a>
            <a class="dropdown-item listItem" href="/search/seed">Seeds</a>
            <a class="dropdown-item listItem" href="/search/tool">Tools</a>
            <a class="dropdown-item listItem" href="/search/soil">Soil</a>
            <a class="dropdown-item listItem" href="/search/hose">Hose</a>
            <a class="dropdown-item listItem" href="/search/pest">Pest Control</a>
          </div>
        </li>
      </ul>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="input" name="search" id="search" onChange={this.valueChanged} placeholder="search" aria-label="Search" />
      <Link to={searchString}>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.passValue} >Search</button>
      </Link>
    </form>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent" style={{justifyContent: "flex-end", marginTop: "-6px"}}>
      <ul className="navbar-nav ">
        <li className="nav-item">
        {this.props.isLoggedIn === "true" ?
          <Link className="navbar-brand  ml-5 mt-2" to='/cart'>
            <ShoppingBasket color="primary" fontSize="large" />
          </Link>:null}
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item dropdown ml-4 mt-3" >
          <a className="nav-link dropdown-toggle text-white" style={{marginTop: "-5px"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {this.props.isLoggedIn === "true" ? (
            <div className="dropdown-item ponter" onClick={this.logoutApi}>
              Logout
            </div>
          ) : (
            
            <Link className="dropdown-item" to='/signin'>Login</Link>
            
          )}
          {this.props.isLoggedIn === "true" ?
            <Link className="dropdown-item" to='/user'>User Management</Link>:null}
            <Link className="dropdown-item "  to='/contact'>Contact us</Link>

          </div>
        </li>

      </ul>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
  </>
    )}}

export default withRouter(Navbar);
