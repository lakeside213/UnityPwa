import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";
import { connect } from "react-redux";
import { signout } from "../../actions/authActions";
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
    let { auth, signout, user } = this.props;

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
            <Menu auth={auth} signout={signout} />
            <Notifications auth={auth} />

            <User auth={auth} user={user} signout={signout} />
          </div>
          {auth.authenticated ? (
            <div className="header__offset-btn">
              <Link to="/app/create">
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
  return { auth: state.auth, user: state.user };
}
export default connect(
  mapStateToProps,
  { signout }
)(Header);
