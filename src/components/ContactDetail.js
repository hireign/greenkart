/**
 * @author Mihir Patel
 */
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

export default class ContactDetail extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      email_id: "",
      contact_no: "",
      message: "",
      state: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    Axios.post("/contact/submitform", this.state)
      .then((res) => {
        alert("Contact from submitted successfully.");

        this.setState({
          name: "",
          email_id: "",
          contact_no: "",
          message: "",
          state: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, email_id, contact_no, message, state } = this.state;
    return (
      <div>
        <div
          className="container-fluid"
          style={{
            paddingTop: " 10px",
            marginTop: "2px",
            paddingBottom: "10px",
            backgroundColor: "#343A40",
            color: "white",
          }}
        >
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: "10px" }}>
          <div className="row text-center padding" style={{ padding: "20px" }}>
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-xm-12"
              style={{ paddingBottom: "30px" }}
            >
              <form onSubmit={this.submitHandler}>
                <br />

                <input
                  type="text"
                  title="Your Name"
                  placeholder="Your Name"
                  required
                  name="name"
                  value={name}
                  onChange={this.changeHandler}
                  style={{
                    backgroundColor: " #f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "10px",
                    textDecoration: " none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />
                <br />
                <br />
                <input
                  type="email"
                  title="Email Address"
                  required
                  placeholder="Email Address"
                  name="email_id"
                  value={email_id}
                  onChange={this.changeHandler}
                  style={{
                    width: "47%",
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />

                <input
                  type="number"
                  title="Number"
                  required
                  placeholder="Cell No."
                  name="contact_no"
                  value={contact_no}
                  onChange={this.changeHandler}
                  style={{
                    width: "50%",
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />

                <br />
                <br />

                <input
                  type="text"
                  placeholder="Message"
                  title="Message"
                  name="message"
                  value={message}
                  onChange={this.changeHandler}
                  style={{
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "100px",
                  }}
                />
                <br />
                <br />

                <input
                  type="text"
                  placeholder="State"
                  title="state"
                  name="state"
                  value={state}
                  onChange={this.changeHandler}
                  style={{
                    backgroundColor: " #f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "10px",
                    textDecoration: " none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />

                <br />
                <br />
                <button
                  type="submit"
                  title="Submit Post"
                  value="Submit"
                  style={{
                    backgroundColor: " #343A40",
                    color: "white",
                    transition: "0.8s",
                    lineHeight: "50%",
                    width: "100%",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "35px",
                  }}
                >
                  Submit
                </button>
                <br />
              </form>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
              <div className="responsive">
                <br />

                <iframe
                  title="i-frame"
                  src="https://maps.google.com/maps?q=1645%20Barrington%20St%20Halifax%2C%20NS%20B3J%201Z9&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="330px"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
