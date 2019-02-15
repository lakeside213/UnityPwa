import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFns from "date-fns";

class Comment extends Component {
  state = {
    user: {},
    responseUser: {}
  };

  componentDidMount() {
    axios
      .post("https://morning-brook-29277.herokuapp.com/user", {
        id: this.props._user
      })
      .then(res => {
        const user = res.data;
        this.setState({ user });
      });
    if (this.props._responseUser) {
      console.log("es gibts" + this.props._responseUser);
      axios
        .post("https://morning-brook-29277.herokuapp.com/user", {
          id: this.props._responseUser
        })
        .then(res => {
          const user = res.data;
          this.setState({ responseUser: user });
        });
    }
  }
  renderAvatar(username, id, responseUser) {
    if (responseUser) {
      return (
        <div class="topic__user topic__user--pos-r">
          <i class="icon-Reply_Fill" />
          <Link to={`/app/user/${id}/posts`} class="avatar">
            <img
              src={`/assets/images/avatars/${
                !username ? "" : username.charAt(0).toUpperCase()
              }.svg`}
              alt="avatar"
            />
          </Link>
        </div>
      );
    }
    return (
      <Link to={`/app/user/${id}/posts`} class="avatar">
        <img
          src={`/assets/images/avatars/${
            !username ? "" : username.charAt(0).toUpperCase()
          }.svg`}
          alt="avatar"
        />
      </Link>
    );
  }
  render() {
    const { user, responseUser } = this.state;
    const { username, _id } = user;

    const { createdAt, description, replyComment, _responseUser } = this.props;
    if (user) {
      return (
        <div class="topic">
          <div class="topic__head">
            <div class="topic__avatar">
              {this.renderAvatar(username, _id, null)}
            </div>
            <div class="topic__caption">
              <div class="topic__name">
                <Link to={`/app/user/${_id}/posts`}>{username}</Link>
              </div>
              <div class="topic__date">
                <div class="topic__avatar">
                  {!_responseUser
                    ? ""
                    : this.renderAvatar(
                        responseUser.username,
                        responseUser._id,
                        true
                      )}
                </div>
                <i class="icon-Watch_Later" />
                {dateFns.distanceInWordsToNow(dateFns.parse(createdAt))}
              </div>
            </div>
          </div>
          <div class="topic__content">
            <div class="topic__text">
              <p>{description}</p>
            </div>
            <div class="topic__footer">
              <div class="topic__footer-likes">
                <div>
                  <a href="#">
                    <i class="icon-Favorite_Topic" />
                  </a>
                  <span>46</span>
                </div>
              </div>
              <div class="topic__footer-share">
                <a
                  onClick={e => {
                    e.preventDefault();
                    replyComment(user._id);
                  }}
                >
                  <i class="icon-Reply_Fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Comment;
