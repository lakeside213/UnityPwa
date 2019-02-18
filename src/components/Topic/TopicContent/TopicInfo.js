import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFns from "date-fns";
class TopicInfo extends Component {
  render() {
    let { views, likes, comments, user } = this.props;

    if (!user) {
      return <div />;
    }
    return (
      <div class="topic__info">
        <div class="topic__info-section">
          <div>
            <span class="topic__info-title">Created</span>
            <div class="topic__info-avatar">
              <Link to={`/app/user/${user._id}/posts`} class="avatar">
                <img
                  src={`/assets/images/avatars/${
                    !user.username ? "" : user.username.charAt(0).toUpperCase()
                  }.svg`}
                  alt="avatar"
                />
              </Link>
            </div>
          </div>
        </div>
        <div class="topic__info-section">
          <div>
            <span class="topic__info-title">Comments</span>
            <div class="topic__info-count">{comments}</div>
          </div>
          <div>
            <span class="topic__info-title">Views</span>
            <div class="topic__info-count">{views}</div>
          </div>

          <div>
            <span class="topic__info-title">Likes</span>
            <div class="topic__info-count">{likes}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopicInfo;
