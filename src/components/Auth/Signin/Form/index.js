import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../../../../actions/authActions";
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
    const { signin, history } = this.props;
    signin(formValues, history, from);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div class="signup__form">
          <Field
            name="email"
            type="text"
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
export default compose(
  connect(
    null,
    { signin }
  ),
  reduxForm({
    form: "login",
    validate
  })
)(withRouter(Form));
