import React from "react";
import Avatar from "./postAvatar";
import { Link } from "react-router-dom";
import Tag from "../../utils/components/tag";
export default function Post({
  id,
  title,
  category,
  replies,
  views,
  userID,
  createdAt,
  tags
}) {
  return (
    <div class="posts__item">
      <div class="posts__section-left">
        <div class="posts__topic">
          <div class="posts__content">
            <Link to={`/app/topic/${id}`}>
              <i class="icon-Locked" />
              <h3>{title}</h3>
            </Link>
            <div class="posts__tags tags">
              <Tag tagName="funny" tagColor="3a3a17" />
            </div>
          </div>
        </div>
        <div class="posts__category">
          <a href="#" class="category">
            <i class="bg-3ebafa" /> {category}
          </a>
        </div>
      </div>
      <div class="posts__section-right">
        <div class="posts__users">
          <Avatar userID={userID} />
        </div>
        <div class="posts__replies">207</div>
        <div class="posts__views">7.5k{""}</div>
        <div class="posts__activity">41m </div>
      </div>
    </div>
  );
}
