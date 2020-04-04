import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import Axios from "axios";
import { withRouter } from "react-router";
class ContactBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      redirect: false,
      error: false,
      name: "",
      subject: "",
      message: "",
      email: ""
    };
    this.validator = new SimpleReactValidator();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    if (this.validator.allValid()) {
      const data = {
        name: this.state.name,
        subject: this.state.subject,
        message: this.state.message,
        email: this.state.email
      };
      Axios.post(process.env.REACT_APP_API + "contact", data)
        .then(response => {
          this.setState({
            redirect: true,
            loading: false
          });
          this.props.history.push("/contact");
        })
        .catch(error => {
          this.setState({ errors: true, loading: false });
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      this.setState({
        loading: false
      });
    }
  };
  render() {
    return (
      <div id="content" className="property-single">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
              <div className="page-header">
                <h1>Contact Us</h1>
              </div>
              <div className="row has-sidebar">
                <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
                  <div className="card">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          onChange={this.handleChange}
                          defaultValue={this.state.name}
                          placeholder="Your Name"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "name",
                            this.state.name,
                            "required|alpha_space"
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact_email">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={this.handleChange}
                          id="contact_email"
                          defaultValue={this.state.email}
                          placeholder="Your Email"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "email",
                            this.state.email,
                            "required|email"
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.handleChange}
                          id="subject"
                          name="subject"
                          defaultValue={this.state.subject}
                          placeholder="Subject"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "subject",
                            this.state.subject,
                            "required"
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          rows={4}
                          className="form-control"
                          id="message"
                          name="message"
                          onChange={this.handleChange}
                          defaultValue={this.state.message}
                          placeholder="Message"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "message",
                            this.state.message,
                            "required"
                          )}
                        </div>
                      </div>
                      <button type="submit" className="btn btn-lg btn-primary">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8 col-xl-8">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="subheadline mt0">Head Office</h3>
                      <address>
                        <strong>Buy and Sell Nepal</strong>
                        <br />
                        Freak Street, Basantapur
                        <br />
                        Kathmandu
                        <br />
                        <abbr title="Phone">P:</abbr> 984111111
                      </address>
                    </div>
                    <div className="col-md-6">
                      <h3 className="subheadline mt0">Office Hours</h3>
                      <ul className="list-unstyled opening-hours">
                        <li>
                          Monday - Friday
                          <span className="float-right">9:00-22:00</span>
                        </li>
                        <li>
                          Saturday{" "}
                          <span className="float-right">14:00-23:30</span>
                        </li>
                        <li>
                          Sunday <span className="float-right">Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="subheadline mt0">Office Location</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.231827460793!2d85.30618318792595!3d27.70296727206766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185656294209%3A0xcc82d364f2dc1c33!2sJhochhen%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1584000827690!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    frameborder="0"
                    style="border:0;"
                    width={600}
                    height={450}
                    title="Map"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ContactBody);
