// basic react component starting template
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitSignup } from "../actions/signup";

class SignupForm extends Component {
  componentDidMount() {}

  handleSubmit(values, props) {
    props.dispatch(
      submitSignup({
        email: values.email,
        password: values.password
      })
    );
  }

  renderField({ input, label, type, meta }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={meta.placeholder} />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      </div>
    );
  }

  render() {
    const { submitting, handleSubmit } = this.props;
    const {
      signing,
      signup_error,
      error_message,
      signup_success
    } = this.props.signup;
    return (
      <div>
        <h2>Sign up Form</h2>
        <form
          onSubmit={handleSubmit(values => {
            this.handleSubmit(values, this.props);
          })}
        >
          <div>
            <label>Email </label>
            <Field
              name="email"
              component={this.renderField}
              type="email"
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label>Password </label>
            <Field
              name="password"
              component={this.renderField}
              type="password"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            disabled={submitting || signing}
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        {signup_error && <span> {error_message}</span>}
        {signup_success && <span> Successful sign-up</span>}
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
};

SignupForm = reduxForm({
  // a unique name for the form
  form: "signup",
  validate,
  onSubmit: submitSignup
})(SignupForm);

export default connect(
  state => {
    return {
      signup: state.signup
    };
  },
  { submitSignup }
)(SignupForm);
