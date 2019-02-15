import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { postComment } from "../../../actions/postActions";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(formValues) {
    const { postComment, postId, responseUserId } = this.props;
    postComment(formValues, postId, responseUserId);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="description"
          component={this.renderTextField}
          labelName="Add Comment"
        />

        <div class="create__footer">
          <button className="create__btn-create btn btn--type-02" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }
}
const validate = formValues => {
  const errors = {};

  return errors;
};

export default compose(
  connect(
    null,
    { postComment }
  ),
  reduxForm({
    form: "addcomment",
    validate
  })
)(withRouter(Form));
