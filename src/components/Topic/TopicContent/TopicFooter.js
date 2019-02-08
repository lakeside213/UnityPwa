import React from "react";

export default function TopicFooter() {
  return (
    <div class="topic__footer">
      <div class="topic__footer-likes">
        <div>
          <a href="#">
            <i class="icon-Upvote" />
          </a>
          <span>201</span>
        </div>
        <div>
          <a href="#">
            <i class="icon-Downvote" />
          </a>
          <span>08</span>
        </div>
        <div>
          <a href="#">
            <i class="icon-Favorite_Topic" />
          </a>
          <span>39</span>
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
