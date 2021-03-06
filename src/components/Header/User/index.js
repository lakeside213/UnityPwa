import React, { Component } from "react";
import Clickaway from "../../utils/Clickaway";
import { Link } from "react-router-dom";

class User extends Component {
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
    let { auth, signout, user } = this.props;

    if (auth.authenticated) {
      return (
        <Clickaway onClickOutside={this.handleClose}>
          <div className="header__user">
            <div
              className={
                dropdownOpen
                  ? "header__user-btn dropdown__btn--open"
                  : "header__user-btn "
              }
              data-dropdown-btn="user"
              onClick={this.handleClick}
            >
              <img
                src={`/assets/images/avatars/${
                  !user.username ? "" : user.username.charAt(0).toUpperCase()
                }.svg`}
                alt="avatar"
              />
              {user.username}
              <i className="icon-Arrow_Below" />
            </div>
            <nav
              className={
                dropdownOpen
                  ? "dropdown dropdown--design-01 dropdown--open"
                  : "dropdown dropdown--design-01"
              }
              data-dropdown-list="user"
            >
              <div>
                <div className="dropdown__icons">
                  <a href="#">
                    <i className="icon-Bookmark" />
                  </a>
                  <a href="#">
                    <i className="icon-Message" />
                  </a>
                  <a href="#">
                    <i className="icon-Preferences" />
                  </a>
                  <a href="#" onClick={signout}>
                    <i className="icon-Logout" />
                  </a>
                </div>
              </div>
              <div>
                <ul className="dropdown__catalog">
                  <li>
                    <Link to={`/app/user/${user._id}/posts`}>Posts</Link>
                  </li>
                  <li>
                    <Link to={`/app/user/${user._id}/activity`}>Activity</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </Clickaway>
      );
    } else {
      return (
        <div class="header__menu" id="#hideMobile">
          <div className="header__menu-btn">
            <Link to="/auth/login">
              <i className="icon-Login_signup" />
              sign-in
            </Link>
          </div>
        </div>
      );
    }
  }
}
export default User;
