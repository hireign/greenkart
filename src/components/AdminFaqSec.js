/**
 * @author Mihir Patel
 */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Axios from "axios";

export default class AdminFaqSec extends Component {
  constructor() {
    super();
    this.state = { question: "", answer: "", faqs: [] };
  }
  submitHandler = (e) => {
    e.preventDefault();
    Axios.post("/contact/submitfaq", {
      question: this.state.question,
      answer: this.state.answer,
    })
      .then((res) => {
        alert("FAQ added successfully");

        this.getFaqs();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getFaqs = () => {
    Axios.get("/contact")
      .then((res) => {
        this.setState({ faqs: res.data, question: "", answer: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = () => {
    this.getFaqs();
  };

  render() {
    const { question, answer } = this.state;

    return (
      <div>
        <div
          className="container-fluid"
          style={{
            padding: "20px",
            marginTop: "2px",
            backgroundColor: "#343A40",
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
            className="accordion"
            id="accordionExample"
            style={{ paddingTop: "20px" }}
          >
            <form
              onSubmit={this.submitHandler}
              style={{ paddingBottom: "20px" }}
            >
              <div className="card">
                <div className="card-header">
                  <h2 className="mb-0">
                    <label>Add Question</label>
                    <span className="float-right">
                      <button
                        id="add-quebtn"
                        className="btn btn-primary"
                        type="submit"
                      >
                        Add
                      </button>
                    </span>
                  </h2>
                </div>

                <div className="card-body" style={{ backgroundColor: "white" }}>
                  Question:
                  <br />
                  <textarea
                    className="bg-light bg-transparent mt-1 p-2 rounded"
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
                    className="bg-white bg-transparent mt-1 p-2 rounded"
                    id="newText1"
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
              <div className="card" key={faq.faq_id}>
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link button_link"
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
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body text-justify">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
