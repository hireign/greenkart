import { Route, Switch } from "react-router-dom";
import React from 'react';
import LoginComponent from "./components/SignInComponent/LoginComponent";
import Product from './pages/ProductComponent'
import Payment from "./pages/Payment/Payment";
import Review from './pages/ReviewsComponent'
import UserProfile from "./pages/UserProfile/UserProfile";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import SearchPage from './pages/SearchLandingPage';
import HomePage from './pages/HomePage/homePage';
import ContactDetails from './pages/ContactDetail';

export default function () {

  return <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={LoginComponent} />
      <Route path="/user">
        <UserProfile />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/cart">
        <OrderSummary />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/rating">
        <Review />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/contact">
        <ContactDetails />
      </Route>
  </Switch>

}