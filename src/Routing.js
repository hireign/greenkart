import { Route, Switch } from "react-router-dom";
import React from 'react';
import LoginComponent from "./components/SignInComponent/LoginComponent";
import SignUpComponent from "./components/SignInComponent/SignUpComponent";
import ForgotPaswordComponent from "./components/SignInComponent/ForgotPaswordComponent";
import Product from './pages/ProductComponent'
import Payment from "./pages/Payment/Payment";
import QucikCheckOutPayment from "./pages/Payment/QucikCheckOutPayment";
import Review from './pages/ReviewsComponent'
import UserProfile from "./pages/UserProfile/UserProfile";
import Cart from "./pages/Cart/Cart";
import SearchPage from './pages/SearchLandingPage';
import HomePage from './pages/HomePage/homePage';
import Contact from "./pages/Contact";
import AdminFaq from "./pages/AdminFaq";

export default function (props) {

  return <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' render={()=> <LoginComponent userLoggedIn={props.userLoggedIn} />}/>
      <Route exact path='/signup' render={()=> <SignUpComponent />}/>
      <Route exact path='/forgotpassword' render={()=> <ForgotPaswordComponent />}/>
      <Route path="/user">
        <UserProfile />
      </Route>
      <Route path="/payment/:productId/:amount/:productName">
      <QucikCheckOutPayment />
    </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/rating/:id">
        <Review />
      </Route>
      <Route exact path="/search"
        component={HomePage}>
      </Route>
      <Route path="/search/:queryterm">
        <SearchPage />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/adminfaq">
        <AdminFaq />
      </Route>
  </Switch>

}
