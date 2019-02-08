import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../../../../actions/authActions";
class Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  renderInput({ input, labelName, placeholder, meta, type }) {
    return (
      <div class="signup__section">
        <label class="signup__label " for="last-name">
          {labelName}{" "}
          {meta.touched && meta.error ? (
            <small className="text-danger">{meta.error}</small>
          ) : (
            ""
          )}
        </label>
        <input
          className="form-control is-invalid"
          type={type}
          placeholder={placeholder}
          {...input}
        />
      </div>
    );
  }
  onSubmit(formValues) {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { signup, history } = this.props;
    this.props.signup(formValues, history, from);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div class="signup__form">
          <Field
            name="username"
            type="text"
            placeholder="Enter your username"
            component={this.renderInput}
            labelName="Username"
          />
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            component={this.renderInput}
            labelName="Email"
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
            component={this.renderInput}
            labelName="Password"
          />
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            component={this.renderInput}
            labelName="confirm Password"
          />
          <button className="signup__btn-create btn btn--type-02" type="submit">
            Create New Account
          </button>
        </div>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "Enter a valid email";
  }
  if (!formValues.username) {
    errors.username = "Enter your username";
  }
  if (!formValues.password) {
    errors.password = "Enter your password";
  }
  if (!formValues.confirmPassword) {
    errors.confirmPassword = "Enter your password";
  }
  if (formValues.password == !formValues.confirmPassword) {
    errors.password = "Passwords do not match";
  }

  return errors;
};

export default compose(
  connect(
    null,
    { signup }
  ),
  reduxForm({
    form: "signup",
    validate
  })
)(withRouter(Form));
