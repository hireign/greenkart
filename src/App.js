import React from 'react';
import './App.css';
import Login from "./pages/LoginComponent";
import Home from './pages/HomeComponent';
import Product from './pages/ProductComponent'
import Review from './pages/ReviewsComponent'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import AppBarSearch from "./components/NavbarComponent";
import BImage from "./assets/background2.jpg"

class App extends React.Component {

  constructor() {
    super();
    if (sessionStorage.getItem("loggedIn") == null || sessionStorage.getItem("loggedIn") === "false") {
      this.state = {
        loggedIn: false
      }
      sessionStorage.setItem("loggedIn", false);
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
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/rating">
            <Review />
          </Route>
          <Route path="/">
            <Home />
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
