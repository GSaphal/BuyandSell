import React, { Component, Fragment } from "react";
import Alert from "react-bootstrap/Alert";
import Axios from "axios";
import Moment from "react-moment";
import Reply from "./Reply";
import { withRouter } from "react-router";
class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loading: false,
      redirect: false,
      errros: false,
      data: [],
      comment: "",
      replyClick: false,
      reply: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (sessionStorage.getItem("userDetails")) {
      this.setState({
        loggedIn: true
      });
      this.getComments();
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  getComments = () => {
    const link =
      process.env.REACT_APP_API + "realestates/" + this.props.id + "/comment";
    Axios.get(link)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const data = {
      body: this.state.comment
    };
    Axios.post(
      process.env.REACT_APP_API + "realestates/" + this.props.id + "/comment",
      data
    )
      .then(response => {
        this.setState({
          comment: ""
        });
        console.log(this.state.comment);
        this.getComments();

        this.props.history.push("/realestate/view/" + this.props.id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="comments">
        <h3 className="subheadline">Comments</h3>
        {this.state.loggedIn ? (
          <form onSubmit={this.handleSubmit}>
            <div className="comment-input-box  mt-2 mb-5" id="post-comment">
              <div className="form-group">
                <label htmlFor="comment">Post Your Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  className="form-control form-control-lg"
                  placeholder="Your Comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-md btn-primary">
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        ) : (
          <Alert variant={"info"} className="mt-5 mb-5">
            <h5 className="">Please login to post a comment.</h5>
          </Alert>
        )}
        {this.state.data.map(item => {
          return (
            <Fragment key={item}>
              <div className="container-fluid">
                <div className="be-comment">
                  <div className="be-img-comment">
                    <a href="blog-detail-2.html">
                      <img
                        src="/img/demo/dummy.png"
                        alt=""
                        className="be-ava-comment"
                      />
                    </a>
                  </div>
                  <div className="be-comment-content">
                    <span className="be-comment-name">
                      <b>Posted By:</b> {item.username}
                    </span>
                    <span className="be-comment-time">
                      <i className="fa fa-clock-o px-2" />
                      <Moment fromNow ago>
                        {item.time}
                      </Moment>{" "}
                      ago
                    </span>
                    <p className="be-comment-text">{item.comment}</p>
                  </div>
                </div>

                {this.state.loggedIn ? (
                  <div className="container">
                    <div className="row justify-content-center  mt-3 mb-3">
                      <div className="col-md-10">
                        <div className="be-comment">
                          {item.replies.map(reply => {
                            return (
                              <Fragment key={reply.id}>
                                <div className="be-img-comment">
                                  <a href="blog-detail-2.html">
                                    <img
                                      src="/img/demo/dummy.png"
                                      alt=""
                                      className="be-ava-comment"
                                    />
                                  </a>
                                </div>
                                <div className="be-comment-content">
                                  <span className="be-comment-name">
                                    <b>Replied by: {reply.username}</b>
                                  </span>
                                  <span className="be-comment-time">
                                    <i className="fa fa-clock-o px-2" />
                                    <Moment fromNow ago>
                                      {reply.time}
                                    </Moment>{" "}
                                    ago
                                  </span>
                                  <p className="be-comment-text">
                                    {reply.reply}
                                  </p>
                                </div>
                              </Fragment>
                            );
                          })}
                        </div>

                        <Reply
                          id={this.props.id}
                          comment_id={item.comment_id}
                          getComment={this.getComments}
                        />
                      </div>
                    </div>
                    <hr />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}
export default withRouter(SingleComment);
