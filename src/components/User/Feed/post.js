import React from "react";
import Avatar from "./postAvatar";

export default function Post({
  title,
  category,
  replies,
  views,
  user,
  createdAt,
  tags
}) {
  return (
    <div class="posts__item">
      <div class="posts__section-left">
        <div class="posts__topic">
          <div class="posts__content">
            <a href="#">
              <i class="icon-Locked" />
              <h3>Which movie have you watched most recently? </h3>
            </a>
            <div class="activity_Desc tags">
              <p>Which movie have you watched most recently?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="posts__section-right">
        <div class="posts__users" />

        <div class="posts__replies" />

        <div class="posts__views" />

        <div class="posts__activity">41m ago</div>
      </div>
    </div>
  );
}
