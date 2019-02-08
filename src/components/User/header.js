import React from "react";

export default function Header() {
  return (
    <div class="nav">
      <div class="nav__categories js-dropdown">
        <div class="nav__categories js-dropdown">
          <div class="nav__select">
            <div class="header__user-btn" data-dropdown-btn="user">
              <img src="/assets/images/avatars/A.svg" alt="avatar" />
              azyrusmax
            </div>
          </div>
        </div>
        <div class="nav__select followButton">
          <button className="authButton">Following</button>
        </div>
      </div>
      <div class="nav__menu  js-dropdown ">
        <div class="nav__select">
          <div class="btn-select profileOptions" data-dropdown-btn="menu">
             Notifications
          </div>
          <div class="dropdown dropdown--design-01" data-dropdown-list="menu">
            <ul class="dropdown__catalog">
              <li>
                <a href="#">Activity</a>
              </li>
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href="#">Friends</a>
              </li>

            </ul>
          </div>
        </div>
        <ul>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Notifications</a>
        </li>
        <li>
          <a href="#">Friends</a>
        </li>
        </ul>
      </div>
    </div>
  );
}
