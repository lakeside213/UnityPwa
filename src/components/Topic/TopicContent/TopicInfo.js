import React from "react";

export default function TopicInfo() {
  return (
    <div class="topic__info">
      <div class="topic__info-section">
        <div>
          <span class="topic__info-title">Created</span>
          <div class="topic__info-avatar">
            <a href="#" class="avatar">
              <img src="fonts/icons/avatars/B.svg" alt="avatar" />
            </a>
            <span>13d</span>
          </div>
        </div>
        <div>
          <span class="topic__info-title">Last reply</span>
          <div class="topic__info-avatar">
            <a href="#" class="avatar">
              <img src="fonts/icons/avatars/A.svg" alt="avatar" />
            </a>
            <span>4h</span>
          </div>
        </div>
      </div>
      <div class="topic__info-section">
        <div>
          <span class="topic__info-title">Replies</span>
          <div class="topic__info-count">18</div>
        </div>
        <div>
          <span class="topic__info-title">Views</span>
          <div class="topic__info-count">205</div>
        </div>
        <div>
          <span class="topic__info-title">Users</span>
          <div class="topic__info-count">6</div>
        </div>
        <div>
          <span class="topic__info-title">Likes</span>
          <div class="topic__info-count">315</div>
        </div>
        <div>
          <span class="topic__info-title">Links</span>
          <div class="topic__info-count">7</div>
        </div>
      </div>
      <a href="#" class="topic__info-more">
        <i class="icon-Arrow_Down" />
      </a>
    </div>
  );
}
