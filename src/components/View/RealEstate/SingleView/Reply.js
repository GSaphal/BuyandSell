import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router";
class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReplySubmit = this.handleReplySubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleReplySubmit = event => {
    event.preventDefault();
    Axios.post(
      process.env.REACT_APP_API +
        "realestates/" +
        this.props.id +
        "/comment/" +
        this.props.comment_id +
        "/reply",
      this.state
    )
      .then(response => {
        this.props.getComment();
        this.setState({
          reply: ""
        });
        this.props.history.push("/realestate/view/" + this.props.id);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleReplySubmit}>
        <div className="form-group">
          <textarea
            id="reply"
            name="reply"
            className="form-control form-control-sm"
            placeholder="Reply"
            value={this.state.reply}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-sm btn-info mt-2">
            Reply
          </button>
        </div>
      </form>
    );
  }
}
export default withRouter(Reply);
