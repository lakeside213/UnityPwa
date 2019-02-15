import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFns from "date-fns";
class TopicHead extends Component {
  render() {
    let { user, createdAt } = this.props;
    console.log(user);
    if (!user) {
      return <div />;
    }
    return (
      <div class="topic__head">
        <div class="topic__avatar">
          <Link to={`/app/user/${user._id}/posts`} className="avatar">
            <img
              src={`/assets/images/avatars/${
                !user.username ? "" : user.username.charAt(0).toUpperCase()
              }.svg`}
              alt="avatar"
            />
          </Link>
        </div>
        <div class="topic__caption">
          <div class="topic__name">
            <Link to={`/app/user/${user._id}/posts`}>{user.username}</Link>
          </div>
          <div class="topic__date">
            <i class="icon-Watch_Later" />
            {dateFns.distanceInWords(createdAt, new Date())}
          </div>
        </div>
      </div>
    );
  }
}

export default TopicHead;
