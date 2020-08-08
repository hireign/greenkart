/**
 * @author Mihir Patel
 */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Axios from "axios";

export default class FAQ extends Component {
  constructor() {
    super();
    this.state = { faqs: [] };
  }

  componentDidMount = () => {
    Axios.get("/contact")
      .then((res) => {
        this.setState({ faqs: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <hr style={{ marginBottom: "0px" }} />

        <div
          className="container-fluid"
          style={{
            padding: "20px",
            backgroundColor: "#343A40",
            marginBottom: "5px",
            color: "white",
          }}
        >
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>
        </div>
        <div className="container accordian_container">
          <div
            className="accordion "
            id="accordionExample"
            style={{ paddingTop: "0px" }}
          >
            {this.state.faqs.map((faq) => (
              <div className="card " key={faq.faq_id}>
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link button_link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      id="button_link"
                    >
                      {faq.question}
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
