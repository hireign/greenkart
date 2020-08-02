import React, { Component } from "react";
import "./LoginComponent.scss";
import Axios from 'axios';
import ForgotPasswordFormComponent from "./ForgotPasswordFormComponent";
import { withRouter } from 'react-router-dom';
/**
 * ForgotPaswordComponent handles the front end part for the Forgot password Page
 *
 * @author [Jatin Partap Rana]
 */
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

onForgotPassword = e => {
  
  this.forgotPasswordApi();
};
/**
 * Calling forgot passoword API.
 */
forgotPasswordApi = (e) => {
  
  
  Axios.post('/forgotpassward', {email: this.state.userEmailId})
  .then(res => {
    
       
         alert(res.data)
         this.props.history.push(`/signin`);
       
  })
  .catch(err => {
      console.log(err);
  })
}

  render() {
    
    return (
      <div style={{margin:"80px auto"}}>
        <div className="row mb-4">
          <div className="login col-lg-4" >
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
