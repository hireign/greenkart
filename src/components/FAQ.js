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

      });
  };


  render() {

    return (
      <div>
        <hr style={{ marginBottom: "0px" }} />

        <div
          className="container-fluid"
          style={{
            padding: " 30px",
          }}
        >
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "20px" }}
          className="container accordian_container"
        >
          <div
            className="accordion"
            id="accordionExample"
            style={{ paddingTop: "0px" }}
          >
            {this.state.faqs.map((faq, i) => (
              <div className="card" key={i}>
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target={"#collapse" + i}
                      aria-expanded="false"
                      aria-controls={"collapse" + i}
                    >
                      {faq.question}
                    </button>
                  </h2>
                </div>

                <div
                  id={"collapse" + i}
                  className="collapse hide"
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
