import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-router-dom";
class Form extends Component {
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
    console.log(formValues);
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
            name="password"
            type="password"
            placeholder="Enter your password"
            component={this.renderInput}
            labelName="Password"
          />
          <div class="signup__checkbox">
            <div class="row">
              <div class="col-md-6">
                <label class="signup__box">
                  <label class="custom-checkbox">
                    <input type="checkbox" checked="checked" />
                    <i />
                  </label>
                  <span>Remember Me?</span>
                </label>
              </div>
              <div class="col-md-6" data-visible="desktop">
                <label class="signup__box text-left">
                  <Link to="/auth/forgot">Forgot Password?</Link>
                </label>
              </div>
            </div>
          </div>
          <button className="signup__btn-create btn btn--type-02" type="submit">
            Login
          </button>
        </div>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Enter your username";
  }
  if (!formValues.password) {
    errors.password = "Enter your password";
  }

  return errors;
};
export default reduxForm({
  form: "login",
  validate
})(Form);
