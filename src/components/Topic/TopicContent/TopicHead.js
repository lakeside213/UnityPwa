import React from "react";

export default function TopicHead() {
  return (
    <div class="topic__head">
      <div class="topic__avatar">
        <a href="#" class="avatar">
          <img src="fonts/icons/avatars/B.svg" alt="avatar" />
        </a>
      </div>
      <div class="topic__caption">
        <div class="topic__name">
          <a href="#">Benjamin Caesar</a>
        </div>
        <div class="topic__date">
          <i class="icon-Watch_Later" />
          06 May, 2017
        </div>
      </div>
    </div>
  );
}
