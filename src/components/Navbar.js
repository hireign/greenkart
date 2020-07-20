import React from 'react';
import logo from '../assets/GreenKartLogo_transparent.png';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShoppingBasket } from '@material-ui/icons'

function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand" href="/">
      <img src={logo} style={{ width: 170 }} />
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Products
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
    <div className="collapse navbar-collapse"  id="navbarSupportedContent" style={{justifyContent: "flex-end", marginTop: "-6px"}}>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="navbar-brand  ml-5 mt-2" to='/cart'>
            <ShoppingBasket color="primary" fontSize="large" />
          </Link>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item dropdown ml-4 mt-3" >
          <a className="nav-link dropdown-toggle text-white" style={{marginTop: "-5px"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to='/signin'>LOGIN</Link>
            <Link className="dropdown-item" to='/user'>User Management</Link>
            <Link className="dropdown-item "  to='/contact'>Contact us</Link>

          </div>
        </li>

      </ul>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
}

export default Navbar;