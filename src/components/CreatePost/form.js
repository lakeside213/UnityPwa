import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createPost } from "../../actions/postActions";
import { connect } from "react-redux";
import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";
import CATEGORIES from "../utils/data/categories";
import TAGS from "../utils/data/tags";
class Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
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
  renderTextField({ input, labelName, meta }) {
    return (
      <div className="create__section create__textarea">
        <label className="create__label" for="description">
          {labelName}{" "}
          {meta.touched && meta.error ? (
            <small className="text-danger">{meta.error}</small>
          ) : (
            ""
          )}
        </label>

        <textarea
          className="form-control"
          {...input}
          placeholder="write something"
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
    const { createPost, history } = this.props;

    createPost(formValues, history);
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
                  {CATEGORIES.map(category => (
                    <option value={category.categoryName}>
                      {category.categoryName}
                    </option>
                  ))}
                </Field>
              </label>
            </div>
          </div>
          <div class="col-md-6" />
        </div>
        <Field
          name="description"
          component={this.renderTextField}
          labelName="Description"
        />
        <Field
          name="hobbies"
          component={this.renderMultiselect}
          data={TAGS.map(tag => tag.tagName)}
        />

        <div class="create__footer">
          <a href="#" class="create__btn-cansel btn">
            Cancel
          </a>
          <button className="create__btn-create btn btn--type-02" type="submit">
            Create Thread
          </button>
        </div>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.email = "Enter a title";
  }

  if (!formValues.description) {
    errors.lastName = "Enter your description";
  }

  return errors;
};

export default compose(
  connect(
    null,
    { createPost }
  ),
  reduxForm({
    form: "createpost",
    validate
  })
)(withRouter(Form));
