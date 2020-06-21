import { Route, Switch } from "react-router-dom";
import React from 'react';
import Login from "./pages/LoginComponent";
import Home from './pages/HomeComponent';
import Product from './pages/ProductComponent'
import Review from './pages/ReviewsComponent'
import UserProfile from "./pages/UserProfile/UserProfile";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import SearchPage from './pages/SearchLandingPage';
import HomePage from './pages/HomePage/homePage';
import LoginComponent from './components/SignInComponent/LoginComponent';
export default function() {
    
return    <Switch>
    <Route>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={LoginComponent} /> 
      <Route path="/user">
        <UserProfile />
      </Route>
      <Route path="/quick-buy/:productId">
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
    </Route>
  </Switch>

}