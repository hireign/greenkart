import React from 'react';
import './App.css';
import RouteTracker from "./Routing";
import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


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
      <RouteTracker/>
          </div>
    );
  }
}

export default App;
