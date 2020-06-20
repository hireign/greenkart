import React from 'react';
import './App.css';
import Login from "./pages/LoginComponent";
import Home from './pages/HomeComponent';
import Product from './pages/ProductComponent'
import Review from './pages/ReviewsComponent'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AppBarSearch from "./components/NavbarComponent";
<<<<<<< Updated upstream
import BImage from "./assets/background2.jpg"
import UserProfile from "./pages/UserProfile/UserProfile";
import Payment from "./pages/Payment/Payment";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
=======
import BImage from "./assets/background2.jpg";
import HomePage from './pages/HomePage/homePage';
>>>>>>> Stashed changes

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
    if (this.state.loggedIn) {
      return (<div >
        <img src={BImage} className="imageBackground" alt="background"></img>
        <AppBarSearch />
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
          </Route>
        </Switch>
      </div>
      );
    }
    else {
      return <div >
        <img src={BImage} className="imageBackground" alt="background"></img>
        <Login loginHandler={this.loginHandler.bind(this)}></Login>
      </div>
    }

  }
}

export default App;
