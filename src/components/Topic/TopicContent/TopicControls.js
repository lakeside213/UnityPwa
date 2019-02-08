import React, { Component } from "react";

class TopicControls extends Component {
  render() {
    return (
      <div class="topics__control">
        <a href="#" class="btn">
          <i class="icon-Bookmark" />
          Bookmark
        </a>
        <a href="#" class="btn">
          <i class="icon-Share_Topic" />
          Share
        </a>
        <a href="#" class="btn">
          <i class="icon-Flag_Topic" />
          Flag
        </a>
        <a href="#" class="btn">
          <i class="icon-Add_User" />
          Invite
        </a>
        <a href="#" class="btn">
          <i class="icon-Track" />
          Track
        </a>
        <a href="#" class="btn btn--type-02" data-visible="desktop">
          <i class="icon-Reply_Fill" />
          Reply
        </a>
      </div>
    );
  }
}
export default TopicControls;
