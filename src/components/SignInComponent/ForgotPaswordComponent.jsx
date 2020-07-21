import React, { Component } from "react";
import "./LoginComponent.scss";
import ProfileComponent from "./ProfileComponent";
import Axios from 'axios';
import ForgotPasswordFormComponent from "./ForgotPasswordFormComponent";
import { withRouter } from 'react-router-dom';

class ForgotPaswordComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      userEmailId: "",
    };
  }

  onEmailChange = e => {
    this.setState({ userEmailId: e.target.value });
  };


  onFormSubmit = e => {
    e.preventDefault();
      this.onForgotPassword();
  };

  loginApi = (e) => {
    Axios.post('/login', {
      email: this.state.userEmailId,
      password: this.state.userPassword
    })
    .then(res => {
      console.log(res)
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

onForgotPassword = e => {
  console.log("iNSIDE fORGOR password 1")
  this.forgotPasswordApi();
};

forgotPasswordApi = (e) => {
  console.log("iNSIDE fORGOR password 2")
  
  Axios.post('/forgotpassward', {email: this.state.userEmailId})
  .then(res => {
    console.log(res)
       
         alert(res.data)
         this.props.history.push(`/signin`);
       
  })
  .catch(err => {
      console.log(err);
  })
}

  render() {
    const { userEmailId } = this.state;
    console.log("Email: " + userEmailId);
    return (
      <div style={{margin:"80px auto"}}>
        <div className="row mb-4">
          <div className="login col-lg-4" style={{ "padding-right": "40px" }}>
            <div className="card mr-1 mt-5 bg-dark  ">
              <div className="card-body bg-dark">
              <h3  style={{color:"white", textDecoration: "bold", textAlign:"center"}}>Forgot Password</h3>
                <ForgotPasswordFormComponent
                  onFormSubmit={this.onFormSubmit}
                  onEmailChange={this.onEmailChange}
                  {...this.state}
                ></ForgotPasswordFormComponent>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  }
}

export default withRouter(ForgotPaswordComponent);
