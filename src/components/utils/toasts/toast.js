import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { removeToast } from "../../../actions/toastActions";
class Toast extends Component {
  render() {
    return (
      <div
        className="snackbar show"
        style={{ backgroundColor: this.props.color, color: "#ffff" }}
        onClick={this.props.onDismissClick}
      >
        {"         "}
        {this.props.message}

        <span style={{ marginLeft: "10%", color: "black", cursor: "pointer" }}>
          X
        </span>
      </div>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}
export default connect(
  null,
  { removeToast }
)(Toast);
