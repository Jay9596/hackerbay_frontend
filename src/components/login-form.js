// basic react component starting template
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitLogin } from "../actions/login";

class LoginForm extends Component {
  componentDidMount() {
    // this.props.dispatch(mock());
  }

  loginUser(values, props) {
    props.dispatch(
      submitLogin({ email: values.email, password: values.password })
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
    const { error, submitting, handleSubmit } = this.props;
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit((values) => {this.loginUser(values, this.props)})}>
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
          {error && <strong>{error}</strong>}
          <button type="submit" disabled={submitting} onSubmit={this.handleSubmit}>
            Log In
          </button>
        </form>
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

LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
  validate
})(LoginForm);

export default connect(
  state => {
    return {
      payload: {
        token: null
      }
    };
  },
  { submitLogin }
)(LoginForm);
