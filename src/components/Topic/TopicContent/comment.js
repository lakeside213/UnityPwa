import React from "react";

export default function Comment() {
  return (
    <div class="topic">
      <div class="topic__head">
        <div class="topic__avatar">
          <a href="#" class="avatar">
            <img src="fonts/icons/avatars/N.svg" alt="avatar" />
          </a>
        </div>
        <div class="topic__caption">
          <div class="topic__name">
            <a href="#">Nicolas</a>
          </div>
          <div class="topic__date">
            <div class="topic__user topic__user--pos-r">
              <i class="icon-Reply_Fill" />
              <a href="#" class="avatar">
                <img src="fonts/icons/avatars/B.svg" alt="avatar" />
              </a>
              <a href="#" class="topic__user-name">
                Benjamin Caesar
              </a>
            </div>
            <i class="icon-Watch_Later" />
            06 May, 2017
          </div>
        </div>
      </div>
      <div class="topic__content">
        <div class="topic__text">
          <p>
            I am using BootStrap 4, but they are asking me to use PHP framework,
            which I won't do. My code is secure against SQL injection, XSS and
            all other attacks, it is well organized, i was using OOP. I just
            think CodeCanyon will always find a reason to reject my work....
          </p>
        </div>
        <div class="topic__footer">
          <div class="topic__footer-likes">
            <div>
              <a href="#">
                <i class="icon-Upvote" />
              </a>
              <span>137</span>
            </div>
            <div>
              <a href="#">
                <i class="icon-Downvote" />
              </a>
              <span>02</span>
            </div>
            <div>
              <a href="#">
                <i class="icon-Favorite_Topic" />
              </a>
              <span>46</span>
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
      </div>
    </div>
  );
}
