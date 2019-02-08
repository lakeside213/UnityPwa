import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";
import { connect } from "react-redux";
class Header extends Component {
  state = {
    searchOpen: false
  };
  handleClick = event => {
    this.setState(prevState => {
      return { searchOpen: !prevState.searchOpen };
    });
  };
  handleClose = event => {
    this.setState({ dropdownOpen: false });
  };
  render() {
    let { searchOpen } = this.state;
    let { auth } = this.props;
    console.log(JSON.stringify(auth.user));

    return (
      <header>
        <div
          className={
            searchOpen
              ? "header js-header js-dropdown header--search "
              : "header js-header js-dropdown "
          }
        >
          <div className="container">
            <Link
              to={{
                pathname: "/app",
                state: { prev: false }
              }}
            >
              <div className="header__logo">
                <h1>
                  <img src="/logo.svg" alt="logo" />
                </h1>
                <div className="header__logo-btn">Unity</div>
              </div>
            </Link>

            <Search toggle={this.handleClick} close={this.handleClose} />
            <Menu auth={auth} />
            <Notifications auth={auth} />

            <User auth={auth} />
          </div>
          {auth.authenticated ? (
            <div className="header__offset-btn">
              <Link
                to={{
                  pathname: "/app/create",
                  state: { prev: true }
                }}
              >
                <img src="/assets/images/New_Topic.svg" alt="New Topic" />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(
  mapStateToProps,
  null
)(Header);
