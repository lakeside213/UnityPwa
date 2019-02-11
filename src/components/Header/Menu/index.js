import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
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
    let { dropdownOpen, feedName } = this.state;
    let { auth, signout } = this.props;
    return (
      <div class="header__menu">
        <div
          className={
            dropdownOpen
              ? "header__menu-btn dropdown__btn--open"
              : "header__menu-btn"
          }
          onClick={this.handleClick}
        >
          Menu
          <i class="icon-Menu_Icon" />
        </div>
        <nav
          className={
            dropdownOpen
              ? "dropdown dropdown--design-01 dropdown--open"
              : "dropdown dropdown--design-01"
          }
          data-dropdown-list="menu"
        >
          {auth.authenticated ? (
            <div id="hideDesktop">
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
          ) : (
            ""
          )}
          <div>
            {auth.authenticated ? (
              <ul class="dropdown__catalog row">
                <li class="col-xs-6">
                  <a href="#">New</a>
                </li>
                <li class="col-xs-6">
                  <a href="#">Unread</a>
                </li>
                <li class="col-xs-6">
                  <a href="#">Groups</a>
                </li>
                <li class="col-xs-6">
                  <a href="#">Users</a>
                </li>
                <li class="col-xs-6">
                  <a href="#">Tags</a>
                </li>
                <li class="col-xs-6">
                  <a href="#">Shortcuts</a>
                </li>
              </ul>
            ) : (
              <button class="signup__btn-create btn btn--type-02">
                <Link to="/auth/login">Login</Link>
              </button>
            )}
          </div>
          <div>
            <h3>Categories</h3>
            <ul class="dropdown__catalog row">
              <li class="col-xs-6">
                <a href="#" class="category">
                  <i class="bg-f9bc64" />
                  Hobbies
                </a>
              </li>
              <li class="col-xs-6">
                <a href="#" class="category">
                  <i class="bg-348aa7" />
                  Social
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Menu;
