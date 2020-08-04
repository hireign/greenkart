/**
 * @author Mihir Patel
 */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "./AdminFaqSec.css";
import Axios from "axios";

export default class AdminFaqSec extends Component {
  constructor() {
    super();
    this.state = { question: "", answer: "", faqs: [] };
  }
  submitHandler = (e) => {
    // e.preventDefault();
    Axios.post("/contact/submitfaq", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.componentDidMount();
  };
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

  render() {
    const { question, answer } = this.state;
    //console.log("faqs:");
    //console.log(this.state.faqs);
    return (
      <div>
        <div
          class="container-fluid"
          style={{
            padding: "30px",
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
        <div class="container accordian_container">
          <div
            class="accordion"
            id="accordionExample"
            style={{ paddingTop: "20px" }}
          >
            <form onSubmit={this.submitHandler}>
              <div class="card">
                <div class="card-header">
                  <h2 class="mb-0">
                    <label>Add Question</label>
                    <span class="float-right">
                      <button
                        id="add-quebtn"
                        class="btn btn-primary"
                        type="submit"
                      >
                        Add
                      </button>
                    </span>
                  </h2>
                </div>

                <div class="card-body" style={{ backgroundColor: "white" }}>
                  Question:
                  <br />
                  <textarea
                    class="bg-light bg-transparent mt-1 p-2 rounded"
                    id="newText"
                    style={{ resize: "none", width: "100%" }}
                    rows="2"
                    placeholder="Your question here..."
                    required
                    name="question"
                    value={question}
                    onChange={this.changeHandler}
                  ></textarea>
                  <br />
                  Answer:
                  <br />
                  <textarea
                    class="bg-white bg-transparent mt-1 p-2 rounded"
                    id="newText"
                    style={{ resize: "none", width: "100%" }}
                    rows="3"
                    placeholder="Your question here..."
                    required
                    name="answer"
                    value={answer}
                    onChange={this.changeHandler}
                  ></textarea>
                </div>
              </div>
            </form>
            {this.state.faqs.map((faq) => (
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link button_link"
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
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body text-justify">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
