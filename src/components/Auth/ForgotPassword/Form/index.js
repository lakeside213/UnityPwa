import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

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
            name="email"
            type="email"
            placeholder="Enter your email"
            component={this.renderInput}
            labelName="Email"
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
  if (!formValues.email) {
    errors.email = "Enter a valid email";
  }

  return errors;
};
export default reduxForm({
  form: "forgot",
  validate
})(Form);
