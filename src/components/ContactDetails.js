import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default class ContactDetail extends Component {
  render() {
    return (
      <div>
        <div
          class="container-fluid"
          style={{
            paddingTop: " 10px",

            paddingBottom: "20px",
            backgroundColor: "#00979d",
            color: "white",
          }}
        >
          <div class="row">
            <div class="col-sm-12 text-center">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>

        <div class="container" style={{ padding: "10px" }}>
          <div class="row text-center padding" style={{ padding: "20px" }}>
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-xm-12"
              style={{ paddingBottom: "30px" }}
            >
              <form>
                <br />

                <input
                  type="text"
                  title="Your Name"
                  class="name"
                  class="from-control"
                  placeholder="Your Name"
                  required
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
                  class="mail"
                  class="from-control"
                  required
                  placeholder="Email Address"
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
                  class="mail"
                  title="Number"
                  required
                  class="from-control"
                  placeholder="+1"
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
                  class="message"
                  title="Message"
                  class="from-control"
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

                <select
                  class="from-control"
                  class="responsive"
                  title="CLick"
                  style={{
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "4px",
                    textDecoration: "none",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                >
                  <option selected disabled>
                    Select Country
                  </option>
                  <option>Canada</option>
                  <option>USA</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Australia</option>
                  <option>UK</option>
                </select>
                <br />
                <br />
                <button
                  type="submit"
                  class="bttn"
                  title="Submit Post"
                  class="from-control"
                  value="Submit"
                  style={{
                    backgroundColor: " #00979d",
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

            <div class="col-lg-6 col-md-6 col-sm-12 col-xm-12">
              <div class="responsive">
                <br />

                <iframe
                  src="https://maps.google.com/maps?q=1645%20Barrington%20St%20Halifax%2C%20NS%20B3J%201Z9&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="330px"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
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