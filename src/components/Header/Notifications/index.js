import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Notification from "./notification";
import { connect } from "react-redux";
class Notifications extends Component {
  state = {
    dropdownOpen: false
  };
  handleClick = event => {
    this.setState(prevState => {
      return { dropdownOpen: !prevState.dropdownOpen };
    });
  };
  handleClose = event => {
    this.setState({ dropdownOpen: false });
  };
  render() {
    let { dropdownOpen } = this.state;
    let { auth } = this.props;
    if (auth.authenticated) {
      return (
        <div
          className={
            dropdownOpen
              ? "header__notification dropdown__btn--open"
              : "header__notification"
          }
        >
          <div className="header__notification-btn" onClick={this.handleClick}>
            <i className="icon-Notification" />
            <span>2</span>
          </div>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <div
              className={
                dropdownOpen
                  ? "dropdown dropdown--design-01 dropdown--open "
                  : "dropdown dropdown--design-01 "
              }
              data-dropdown-list="notification"
            >
              <div>
                <Notification key={0} />
                <Notification key={1} />
                <span>
                  <a href="#">view older notifications...</a>
                </span>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      );
    } else {
      return <div className="header__notification" />;
    }
  }
}
function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}
export default connect(
  null,
  null
)(Notifications);
