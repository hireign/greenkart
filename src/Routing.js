import { Route, Switch } from "react-router-dom";
import React from 'react';
import LoginComponent from "./components/SignInComponent/LoginComponent";
import SignUpComponent from "./components/SignInComponent/SignUpComponent";
import ForgotPaswordComponent from "./components/SignInComponent/ForgotPaswordComponent";
import Product from './pages/ProductComponent'
import Payment from "./pages/Payment/Payment";
import Review from './pages/ReviewsComponent'
import UserProfile from "./pages/UserProfile/UserProfile";
import Cart from "./pages/Cart/Cart";
import SearchPage from './pages/SearchLandingPage';
import HomePage from './pages/HomePage/homePage';
import ContactDetails from './pages/ContactDetail';

export default function (props) {

  return <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' render={()=> <LoginComponent userLoggedIn={props.userLoggedIn} />}/>
      <Route exact path='/signup' render={()=> <SignUpComponent />}/>
      <Route exact path='/forgotpassword' render={()=> <ForgotPaswordComponent />}/>
      <Route path="/user">
        <UserProfile />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/rating">
        <Review />
      </Route>
      {/* <Route path="/search">
        <SearchPage />
      </Route> */}
      <Route path="/contact">
        <ContactDetails />
      </Route>
      <Route exact path="/search/:queryterm">
        <SearchPage />
      </Route>
  </Switch>

}