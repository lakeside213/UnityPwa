import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { addSnackbar } from "../../../../actions/snackbarActions";
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

    addSnackbar("Passwords do not match");
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div class="signup__form">
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
            Reset Password
          </button>
        </div>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};
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
export default reduxForm({
  form: "forgot",
  validate
})(Form);
