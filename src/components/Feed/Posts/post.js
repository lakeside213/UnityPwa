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
              <h3>Which movie have you watched most recently?</h3>
            </a>
            <div class="posts__tags tags">
              <a href="#" class="bg-3a3a17">
                username
              </a>
              <a href="#" class="bg-6f7e9c">
                funny
              </a>
            </div>
          </div>
        </div>
        <div class="posts__category">
          <a href="#" class="category">
            <i class="bg-3ebafa" /> Exchange
          </a>
        </div>
      </div>
      <div class="posts__section-right">
        <div class="posts__users">
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <div class="posts__replies">
          207
          <i class="icon-Reply_Empty" />
        </div>
        <div class="posts__views">
          7.5k{""}
          <i class="icon-Watching" />
        </div>
        <div class="posts__activity">41m ago</div>
      </div>
    </div>
  );
}
