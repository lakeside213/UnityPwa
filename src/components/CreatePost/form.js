import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";
class Form extends Component {
  renderInput({ input, labelName, placeholder, meta, type }) {
    return (
      <div class="create__section">
        <label class="create__label" for="title">
          {labelName}{" "}
          {meta.touched && meta.error ? (
            <small className="text-danger">{meta.error}</small>
          ) : (
            ""
          )}
        </label>
        <input
          className="form-control "
          type={type}
          placeholder={placeholder}
          {...input}
        />
      </div>
    );
  }
  renderRadio({ input, question, option1, option2, meta }) {
    return (
      <div class="create__section">
        <label class="create__label">{question}</label>
        <div class="create__radio">
          <label class="create__box">
            <label class="custom-radio">
              <input
                type="radio"
                name={question}
                checked="checked"
                value={option1}
              />
              <i />
            </label>
            <span>{option1}</span>
          </label>
          <label class="create__box">
            <label class="custom-radio">
              <input type="radio" name={question} value={option2} />
              <i />
            </label>
            <span>{option2}</span>
          </label>
        </div>
      </div>
    );
  }
  renderMultiselect({ input, data, valueField, textField }) {
    return (
      <div class="create__section">
        <label class="create__label" for="tags">
          Add Tags
        </label>
        <Multiselect
          {...input}
          onBlur={() => input.onBlur()}
          value={input.value || []} // requires value to be an array
          data={data}
          valueField={valueField}
          textField={textField}
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
        <Field
          name="title"
          type="text"
          placeholder="Enter the title of the Thread"
          component={this.renderInput}
          labelName="Thread Title"
        />
        <div class="row">
          <div class="col-md-6">
            <div class="create__section">
              <label class="create__label" for="category">
                Select Category
              </label>
              <label class="custom-select">
                <Field name="category" component="select">
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="ff0000">Red</option>
                  <option value="00ff00">Green</option>
                  <option value="0000ff">Blue</option>
                </Field>
              </label>
            </div>
          </div>
          <div class="col-md-6" />
        </div>
        <div class="create__section create__textarea">
          <label class="create__label" for="description">
            Description
          </label>

          <textarea class="form-control" id="description" />
        </div>

        <Field
          name="hobbies"
          component={this.renderMultiselect}
          data={["Guitar", "Cycling", "Hiking"]}
        />
        <div class="create__advanced">
          <div class="row">
            <div class="col-lg-4 col-xl-4">
              <Field
                name="postVisibility"
                component={this.renderRadio}
                question="Who can see this post?"
                option1="Everyone"
                option2="Friends"
              />
            </div>

            <div class="col-lg-4 col-xl-5">
              <Field
                name="postMaturity"
                component={this.renderRadio}
                question="Is this a Mature Thread?"
                option1="Yes"
                option2="No"
              />
            </div>
          </div>
        </div>
        <div class="create__footer">
          <a href="#" class="create__btn-cansel btn">
            Cancel
          </a>
          <a href="#" class="create__btn-create btn btn--type-02">
            Create Thread
          </a>
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
  if (!formValues.firstName) {
    errors.firstName = "Enter your firstname";
  }
  if (!formValues.lastName) {
    errors.lastName = "Enter your lastname";
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
export default reduxForm({
  form: "createpost",
  validate
})(Form);
