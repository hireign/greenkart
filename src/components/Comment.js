import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import styles from "./Comment.css";

export default class CommentSection extends Component {
  render() {
    return (
      <div>
        <br />
        <div class="container-fluid panel-heading">
          <div class="">
            <h3 class="text-align-center">Comment Panel</h3>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-lg-2 col-sm-0 col-xs-0"></div>
            <div class="col-md-8  col-sm-12 col-xs-12 col-lg-8">
              <div class="comment-wrapper" style={{ paddingTop: "10px" }}>
                <div class="panel panel-info">
                  <div class="panel-body">
                    <textarea
                      class="form-control"
                      placeholder="write a comment..."
                      rows="3"
                    ></textarea>
                    <br />
                    <button type="button" class="btn btn-info pull-right">
                      Post
                    </button>
                    <div class="clearfix"></div>
                    <hr />
                    <ul class="media-list">
                      <li class="media">
                        <a to="#" class="pull-left">
                          <img
                            src="https://bootdey.com/img/Content/user_1.jpg"
                            alt=""
                            class="img-circle"
                          />
                        </a>
                        <div class="media-body">
                          <span class="text-muted pull-right">
                            <small class="text-muted">30 min ago</small>
                          </span>
                          <strong class="text-success">@MartinoMont</strong>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet,
                            <a to="#">#consecteturadipiscing </a>.
                          </p>
                        </div>
                      </li>
                      <li class="media">
                        <a to="#" class="pull-left">
                          <img
                            src="https://bootdey.com/img/Content/user_2.jpg"
                            alt=""
                            class="img-circle"
                          />
                        </a>
                        <div class="media-body">
                          <span class="text-muted pull-right">
                            <small class="text-muted">30 min ago</small>
                          </span>
                          <strong class="text-success">@LaurenceCorreil</strong>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor <a to="#">#ipsumdolor </a>
                            adipiscing elit.
                          </p>
                        </div>
                      </li>
                      <li class="media">
                        <a to="#" class="pull-left">
                          <img
                            src="https://bootdey.com/img/Content/user_3.jpg"
                            alt=""
                            class="img-circle"
                          />
                        </a>
                        <div class="media-body">
                          <span class="text-muted pull-right">
                            <small class="text-muted">30 min ago</small>
                          </span>
                          <strong class="text-success">@JohnNida</strong>
                          <p>
                            Lorem ipsum dolor <a to="#">#sitamet</a> sit amet,
                            consectetur adipiscing elit.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 col-sm-0 col-xs-0"></div>
          </div>
        </div>
      </div>
    );
  }
}