import React, { Component } from "react";
import "./LoginComponent.scss";
import ProfileComponent from "./ProfileComponent";
import Axios from 'axios';
import SignInFormComponent from "./SignInFormComponent";
import { withRouter } from 'react-router-dom';

class LoginComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      userEmailId: "",
      userPassword: ""
    };
  }

  onEmailChange = e => {
    this.setState({ userEmailId: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ userPassword: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    
    if (this.state.userPassword.length < 5) {
      alert("Password should be of at least 5 characters");
    } else { 
      this.loginApi();
      
    }
  };

  loginApi = (e) => {
    Axios.post('/login', {
      email: this.state.userEmailId,
      password: this.state.userPassword
    })
    .then(res => {
      
         if(res.data === true)
         {
          this.props.userLoggedIn("true");
          this.props.history.push(`/`);
          //this.props.history.push(`/confirmOrder/${this.state.param2}/${this.state.param1}/${this.state.param3}/${this.state.userEmailId}`)
         }
         else
         {
           alert("Invalid User")
         }
    })
    .catch(err => {
        console.log(err);
    })
}

onForgotPassword = e => {
  
  this.logoutApi();
};

logoutApi = (e) => {
  
  Axios.post('/forgotpassward', {})
  .then(res => {
    
       if(res.data === true)
       {
        this.props.userLoggedIn("true");
        this.props.history.push(`/`);
        //this.props.history.push(`/confirmOrder/${this.state.param2}/${this.state.param1}/${this.state.param3}/${this.state.userEmailId}`)
       }
       else
       {
         alert("Invalid User")
         this.props.history.push(`/`);
       }
  })
  .catch(err => {
      console.log(err);
  })
}

  render() {
    const { userEmailId } = this.state;
    
    return (
      <div style={{margin:"80px auto"}}>
        <div className="row mb-4">
          <div className="login col-lg-4" >
            <div className="card mr-1 mt-5 bg-dark  ">
              <div className="card-body bg-dark">
              <h3  style={{color:"white", textDecoration: "bold", textAlign:"center"}}>Login</h3>
                <SignInFormComponent
                  onFormSubmit={this.onFormSubmit}
                  onEmailChange={this.onEmailChange}
                  onPasswordChange={this.onPasswordChange}
                  onForgotPassword = {this.onForgotPassword}
                  {...this.state}
                ></SignInFormComponent>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
