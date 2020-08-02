/**
 * @author Mihir Patel
 */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./FAQ.css";
import Axios from "axios";
//import data from "./data";
//const faqs = [];

export default class FAQ extends Component {
  constructor() {
    super();
    this.state = { faqs: [] };
  }

  componentDidMount = () => {
    Axios.get("/contact")
      .then((res) => {
        console.log(res.data);
        //faqs = res.data;
        this.setState({ faqs: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //          <div class ="faqs">
  //{} data.faqs.map(faq) =>(faq => )

  render() {
    console.log("faqs:");
    console.log(this.state.faqs);
    return (
      <div>
        <hr style={{ marginBottom: "0px" }} />

        <div
          class="container-fluid"
          style={{
            padding: " 30px",
            backgroundColor: "#00979d",
            color: "white",
          }}
        >
          <div class="row">
            <div class="col-sm-12 text-center">
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>
        </div>
        <div style={{marginTop: "20px"}} class="container accordian_container">
          <div
            class="accordion "
            id="accordionExample"
            style={{ paddingTop: "0px" }}
          >
            {this.state.faqs.map((faq) => (
              <div class="card ">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link button_link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      id="button_link"
                    >
                      {faq.question}
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div style={{color: "white"}} class="card-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

/*
            {faqs.map((faq) => (
              
                <div class="card ">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link button_link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        id="button_link"
                      >
                        {faq.question}
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">{faq.answer}</div>
                  </div>
                </div>
             
            ))}


*/
