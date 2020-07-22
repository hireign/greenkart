import React from 'react';
import './App.css';
import RouteTracker from "./Routing";
import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { OrderContext } from "./contexts/OrderContext";
import Footer from './components/FooterComponent/FooterComponent';
import { Grid } from '@material-ui/core';
import Axios from 'axios';


class App extends React.Component {

  setOrder = order => {
    this.setState(prevState => ({ order }));
  }

  setLoggedIn = loggedIn => {
    this.setState(prevState => ({ loggedIn }));
  }

  componentDidMount(){
    console.log("Inside App.js Login")
      Axios.get('/checkUser')
      .then(res => {
        console.log("Inside App.js Login")
        console.log(res)
           if(res.data === true)
           {
            this.setState({ loggedIn: "true" });
           }
      })
      .catch(err => {
          console.log(err);
      })
  }


  constructor() {
    super();
    //if (sessionStorage.getItem("loggedIn") == null || sessionStorage.getItem("loggedIn") === "false") {
      this.state = {
        loggedIn: false,
        order: {}
      }
      sessionStorage.setItem("loggedIn", true);
   // }
    // else {
    //   this.state = {
    //     loggedIn: true,
    //     order: {}
    //   }
    // }
  }

  loginHandler() {
    sessionStorage.setItem("loggedIn", "true");
    this.setState({ loggedIn: true });
  }

  loggedInEvent = (userLoggedIn) => {
    this.setState({ loggedIn: userLoggedIn });
}

  render() {
    let { order, loggedIn } = this.state;
    let { setOrder, setLoggedIn } = this;
    console.log("Appjs In value"+this.state.loggedIn)
    return (<div>
      <OrderContext.Provider value={{ order, setOrder, loggedIn, setLoggedIn }}>
        <Grid row>
          <NavBar userLoggedIn={this.loggedInEvent} isLoggedIn = {this.state.loggedIn} />
          <RouteTracker userLoggedIn={this.loggedInEvent} />
          <Footer></Footer>
        </Grid>
      </OrderContext.Provider>
    </div>
    );
  }
}

export default App;




