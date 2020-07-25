import React, { Component } from "react";
import "./LoginComponent.scss";
import Axios from 'axios';
import SignUpFormComponent from "./SignUpFormComponent";
import { withRouter } from 'react-router-dom';
/**
 * SignUpComponent handles the front end part for the Create Account Page
 *
 * @author [Jatin Partap Rana]
 */
class SignUpComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      userEmailId: "",
      userPassword: "",
      userName:""
    };
  }

  onEmailChange = e => {
    this.setState({ userEmailId: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ userPassword: e.target.value });
  };

  onUsernameChange = e => {
    this.setState({ userName: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    
    if (this.state.userPassword.length < 5) {
      alert("Password should be of at least 5 characters");
    }
    if (this.state.userName.length < 5) {
      alert("Username should be of at least 5 characters");
    }
     else { 
      this.createAccountApi();
    }
  };
/**
 * Calling create account API.
 */
  createAccountApi = (e) => {
    Axios.post('/createAccount', {
      email: this.state.userEmailId,
      password: this.state.userPassword,
      userName: this.state.userName
    })
    .then(res => {
      
         if(res.data === true)
         {
          this.props.history.push(`/signin`);
         }
         else
         {
           alert(res.data)
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
              <h3  style={{color:"white", textDecoration: "bold", textAlign:"center"}}>Create Account</h3>
                <SignUpFormComponent
                onFormSubmit={this.onFormSubmit}
                onEmailChange={this.onEmailChange}
                onPasswordChange={this.onPasswordChange}
                onUsernameChange = {this.onUsernameChange}
                {...this.state}
                ></SignUpFormComponent>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  }
}

export default withRouter(SignUpComponent);
