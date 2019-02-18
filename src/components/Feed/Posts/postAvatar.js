import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFns from "date-fns";
import { URL } from "../../../url";
class PostAvatar extends Component {
  state = {
    dropdownOpen: false,
    user: {}
  };

  componentDidMount() {
    axios
      .post(`${URL}/api/user`, {
        id: this.props.userID
      })
      .then(res => {
        const user = res.data;

        this.setState({ user });
      });
  }
  handleClick = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { dropdownOpen: !prevState.dropdownOpen };
    });
  };
  handleClose = event => {
    this.setState({ dropdownOpen: false });
  };
  render() {
    let { dropdownOpen, user } = this.state;
    let { userID } = this.props;
    let { username, joined, postsLength, commentsLength } = user;
    return (
      <div>
        <a href="#" className="avatar">
          <img
            src={`/assets/images/avatars/${
              !username ? "" : username.charAt(0).toUpperCase()
            }.svg`}
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
              {!username ? "" : username.charAt(0).toUpperCase()}
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
              <Link to={`/app/user/${userID}/posts`}>{username}</Link>
              <p>Joined {dateFns.distanceInWordsToNow(new Date(joined))} ago</p>
            </div>

            <div className="dropdown__user-statistic">
              <div>
                Threads - <span>{postsLength}</span>
              </div>
              <div>
                comments - <span>{commentsLength}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostAvatar;
