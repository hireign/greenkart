import React from 'react';
import './App.css';
import Login from "./pages/LoginComponent";
import Home from './pages/HomeComponent';
import Product from './pages/ProductComponent'
import Review from './pages/ReviewsComponent'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import NavBar from "./components/Navbar";
import UserProfile from "./pages/UserProfile/UserProfile";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import SearchPage from './pages/SearchLandingPage';

class App extends React.Component {

  constructor() {
    super();
    if (sessionStorage.getItem("loggedIn") == null || sessionStorage.getItem("loggedIn") === "false") {
      this.state = {
        loggedIn: false
      }
      sessionStorage.setItem("loggedIn", true);
    }
    else {
      this.state = {
        loggedIn: true
      }
    }
  }

  loginHandler() {
    sessionStorage.setItem("loggedIn", "true");
    this.setState({ loggedIn: true });
  }

  render() {
    return (<div>
      <NavBar />
      <Switch>
        <Route>
          <Route exact path='/' component={HomePage} />
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
    </div>
    );
  }
}

export default App;
