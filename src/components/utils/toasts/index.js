import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import Toast from "./toast";
import { removeToast } from "../../../actions/toastActions";

class Toasts extends Component {
  render() {
    const { removeToast, toasts } = this.props;

    return (
      <Fragment>
        {toasts.map(toast => {
          const { id } = toast;
          return (
            <Toast
              {...toast}
              key={id}
              id={id}
              onDismissClick={() => removeToast(id)}
            />
          );
        })}
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return { toasts: state.toasts };
}
export default connect(
  mapStateToProps,
  { removeToast }
)(Toasts);
