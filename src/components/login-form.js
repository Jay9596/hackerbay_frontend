// basic react component starting template
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { submitLogin } from "../actions/login";

class LoginForm extends Component {
  componentDidMount() {
    // this.props.dispatch(mock());
  }

  loginUser(values, props) {
    props.dispatch(
      submitLogin({
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
      login_error,
      error_message,
      login_success,
      logging
    } = this.props.login;
    return (
      <div>
        <h2>Login Form</h2>
        <form
          onSubmit={handleSubmit(values => {
            this.loginUser(values, this.props);
          })}
        >
          <Field
            label="Email"
            type="email"
            name="email"
            component={this.renderField}
            placeholder="email@email.com"
          />
          <Field
            label="Password"
            type="password"
            component={this.renderField}
            name="password"
            placeholder=""
          />
          <button
            type="submit"
            disabled={submitting || logging}
            onSubmit={this.handleSubmit}
          >
            Log In
          </button>
        </form>
        {login_error && <span> {error_message} </span>}
        {/* {login_success && <span> Successful login </span>} */}
        {login_success && <Redirect to='/dashboard'/>}
      </div>
    );
  }
}

export const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
  validate,
  onSubmit: submitLogin
})(LoginForm);

export default connect(
  state => {
    return {
      login: state.login
    };
  },
  { submitLogin }
)(LoginForm);
