import React, { Component } from "react";
import "./LoginComponent.scss";
import Axios from "axios";
import SignInFormComponent from "./SignInFormComponent";
import { withRouter } from "react-router-dom";
/**
 * LoginComponent handles the front end part for the Login Page
 *
 * @author [Jatin Partap Rana]
 */
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmailId: "",
      userPassword: "",
      redirectedFromListing: this.props.match.params.redirectedfrom,
    };
  }

  onEmailChange = (e) => {
    this.setState({ userEmailId: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ userPassword: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.userPassword.length < 5) {
      alert("Password should be of at least 5 characters");
    } else {
      this.loginApi();
    }
  };
  /**
   * Making Login API.
   */
  loginApi = (e) => {
    Axios.post("/login", {
      email: this.state.userEmailId,
      password: this.state.userPassword,
    })
      .then((res) => {
        console.log(res);
        if (res.data === "Invalid credentials") {
          alert("Invalid User");
        } else if (
          //this condition will take the user back to search landing page if they were redirected from there
          (res.status === 200) &
          (this.state.redirectedFromListing != null)
        ) {
          this.props.userLoggedIn(res.data.user);
          this.props.history.push(
            "/search/" + this.state.redirectedFromListing
          );
        } else if (res.data.user.isAdmin === true) {
          this.props.userLoggedIn(res.data.user);
          this.props.history.push(`/adminfaq`);
        } else if (res.data.user.loggedIn === true) {
          this.props.userLoggedIn(res.data.user);
          this.props.history.push(`/`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onForgotPassword = (e) => {
    this.logoutApi();
  };

  logoutApi = (e) => {
    Axios.post("/forgotpassward", {})
      .then((res) => {
        if (res.data === true) {
          const userObj = { userName: "", loggedIn: false };
          this.props.userLoggedIn(userObj);
          this.props.history.push(`/`);
        } else {
          alert("Invalid User");
          this.props.history.push(`/`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={{ margin: "80px auto" }}>
        <div className="row mb-4">
          <div className="login col-lg-4">
            <div className="card mr-1 mt-5 bg-dark  ">
              <div className="card-body bg-dark">
                <h3
                  style={{
                    color: "white",
                    textDecoration: "bold",
                    textAlign: "center",
                  }}
                >
                  Login
                </h3>
                <SignInFormComponent
                  onFormSubmit={this.onFormSubmit}
                  onEmailChange={this.onEmailChange}
                  onPasswordChange={this.onPasswordChange}
                  onForgotPassword={this.onForgotPassword}
                  {...this.state}
                ></SignInFormComponent>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
