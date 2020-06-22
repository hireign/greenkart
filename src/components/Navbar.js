import React from 'react';
import logo from '../assets/GreenKartLogo_transparent.png';
import './Navbar.css'
import  Cart from '../photos/supermarket.svg';
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
        <li className="nav-item dropdown ml-4 mt-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to='/signin'>LOGIN</Link>
          <Link className="dropdown-item" to='/user'>User Management</Link>
          </div>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand  ml-5 mt-2" to='/cart'><img src={Cart} alt="Cart" ></img></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link  text-uppercase ml-3 mt-3  mr-2" to='/contact'>CONTACT US</Link>
      </li>
      </ul>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
}

export default Navbar;