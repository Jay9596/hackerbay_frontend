import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { submitWebsite } from "../actions/add-website";

class AddWebsite extends Component {
  addWebsite(values, token, props) {
    props.dispatch(
      submitWebsite(
        {
          name: values.name,
          url: values.url
        },
        token
      )
    );
  }

  render() {
    const { submitting, handleSubmit } = this.props;
    const {
      addSuccess,
      addError,
      addFailure,
      addRequest
    } = this.props.add_site;
    return (
      <div>
        <div>
          <p>Add a new website</p>
        </div>
        <form
          onSubmit={handleSubmit(values => {
            this.addWebsite(values, this.props.token, this.props);
          })}
        >
          <Field
            name="name"
            type="text"
            component="input"
            placeholder="Name of website"
          />
          <br />
          <Field
            name="url"
            type="text"
            component="input"
            placeholder="URL of website"
          />
          <br />
          <button
            type="submit"
            disabled={submitting || addRequest}
            onSubmit={this.handleSubmit}
          >
            Add
          </button>
        </form>
        {addFailure && <span className="error_msg">Error: {addError}</span>}
        {addRequest && <span className="Loading">Sending Request..</span>}
        {addSuccess && this.props.resetForm() && this.props.callRefresh}
      </div>
    );
  }
}

AddWebsite = reduxForm({
  form: "add_website"
})(AddWebsite);

export default connect(
  state => {
    return {
      add_site: state.addWebsite
    };
  },
  { submitWebsite }
)(AddWebsite);
