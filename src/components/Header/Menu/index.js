import React, { Component } from "react";

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
    let { dropdownOpen } = this.state;
    let { auth } = this.props;
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
          Categories
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
              <button class="signup__btn-create btn btn--type-02" type="submit">
                Login
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
