import React from "react";
import Avatar from "./postAvatar";
import { Link } from "react-router-dom";
import dateFns from "date-fns";
import Tag from "../../utils/components/tag";
import Category from "../../utils/components/category";
export default function Post({
  id,
  title,
  category,
  replies,
  views,
  userID,
  createdAt,
  tags,
  background
}) {
  return (
    <div class={`posts__item ${background}`}>
      <div class="posts__section-left">
        <div class="posts__topic">
          <div class="posts__content">
            <Link to={`/app/topic/${id}`}>
              <h3>{title}</h3>
            </Link>
            <div class="posts__tags tags">
              {tags ? tags.map(tag => <Tag tagName={tag.name} />) : ""}
            </div>
          </div>
        </div>
        <div class="posts__category">
          <Category categoryName={category} />
        </div>
      </div>
      <div class="posts__section-right">
        <div class="posts__users">
          <Avatar userID={userID} />
        </div>

        <div class="posts__views">
          {views}
          {""}
        </div>
        <div class="posts__activity">
          {dateFns.distanceInWordsToNow(dateFns.parse(createdAt))}
        </div>
      </div>
    </div>
  );
}
