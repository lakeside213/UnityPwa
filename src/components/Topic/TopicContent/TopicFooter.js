import React, { Component } from "react";
import { connect } from "react-redux";
import { likeToggle } from "../../../actions/postActions";
class TopicFooter extends Component {
  LikeButton() {
    const { _id, likeToggle } = this.props;
    likeToggle(_id);
  }
  render() {
    const { likes, liked } = this.props;
    return (
      <div class="topic__footer">
        <div class="topic__footer-likes">
          <div>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                this.LikeButton();
              }}
            >
              <span>{`${likes}`}</span>
              <i class="icon-Favorite_Topic" />
            </a>
            <span>{`${liked ? "You liked this post" : ""}`}</span>
          </div>
        </div>
        <div class="topic__footer-share">
          <div data-visible="desktop">
            <a href="#">
              <i class="icon-Share_Topic" />
            </a>
            <a href="#">
              <i class="icon-Flag_Topic" />
            </a>
            <a href="#">
              <i class="icon-Bookmark" />
            </a>
          </div>
          <div data-visible="mobile">
            <a href="#">
              <i class="icon-More_Options" />
            </a>
          </div>
          <a href="#">
            <i class="icon-Reply_Fill" />
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { likeToggle }
)(TopicFooter);
