import React from 'react';
import logo from '../assets/GreenKartLogo_transparent.png';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/"><img src={logo} style={{ width: 170 }} /></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Seeds
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Plants
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tools
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Supplies
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
      </ul>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <Link to="/search"><button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button></Link>
    </form>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to='/signin'>LOGIN</Link>
          </div>
        </li>
      </ul>
      <Link to="/quick-buy/1"><button>Cart</button></Link>
      <a href="#" style={{ color: "black" }}><i className="fas fa-shopping-cart fa-2x" style={{ width: 200 }}></i></a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
}

export default Navbar;