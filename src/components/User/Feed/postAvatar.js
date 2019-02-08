import React, { Component } from "react";

class PostAvatar extends Component {
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
    return (
      <div>
        <a href="#" className="avatar">
          <img
            src="/assets/images/avatars/T.svg"
            alt="avatar"
            data-dropdown-btn="user-t"
            onClick={this.handleClick}
            className={dropdownOpen ? "dropdown__btn--open" : ""}
          />
        </a>
        <div
          className={
            dropdownOpen
              ? "posts__users-dropdown dropdown dropdown--user dropdown--open"
              : "posts__users-dropdown dropdown dropdown--user "
          }
          data-dropdown-list="user-t"
        >
          <div className="dropdown__user">
            <a href="#" className="dropdown__user-label bg-00bd9d">
              T
            </a>
            <div className="dropdown__user-nav">
              <a href="#">
                <i className="icon-Add_User" />
              </a>
              <a href="#">
                <i className="icon-Message" />
              </a>
            </div>
            <div className="dropdown__user-info">
              <a href="#">Tesla Motors</a>
              <p>Last post 4 hours ago. Joined Jun 1, 16</p>
            </div>

            <div className="dropdown__user-statistic">
              <div>
                Threads - <span>1184</span>
              </div>
              <div>
                Posts - <span>5,863</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostAvatar;
