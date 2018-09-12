// basic react component starting template
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitSignup } from "../actions/signup";

class SignupForm extends Component {
  // const { handleSubmit } = props;
  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  handleSubmit() {}

  render() {
    return (
      <div>
        <h2>Sign up Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email </label>
            <Field
              name="firstName"
              component="input"
              type="email"
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label>Password </label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder=""
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

SignupForm = reduxForm({
  // a unique name for the form
  form: "signup"
})(SignupForm);

export default connect(
  state => {
    return { data: null };
  },
  { submitSignup }
)(SignupForm);
