import React, { Component } from "react";
import "./LoginComponent.scss";
import Axios from 'axios';
import SignUpFormComponent from "./SignUpFormComponent";
import { withRouter } from 'react-router-dom';

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
    console.log("Password length" + this.state.userPassword);
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

  createAccountApi = (e) => {
    Axios.post('/createAccount', {
      email: this.state.userEmailId,
      password: this.state.userPassword,
      userName: this.state.userName
    })
    .then(res => {
      console.log(res)
         if(res.data === true)
         {
          this.props.history.push(`/signin`);
          //this.props.history.push(`/confirmOrder/${this.state.param2}/${this.state.param1}/${this.state.param3}/${this.state.userEmailId}`)
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
    console.log("Email: " + userEmailId);
    return (
      <div style={{margin:"80px auto"}}>
        <div className="row mb-4">
          <div className="login col-lg-4" style={{ "padding-right": "40px" }}>
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
