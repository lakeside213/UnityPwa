import React from "react";

import { Link, withRouter } from "react-router-dom";

const NavLink = props => {
  return (
    <li>
      <Link to={`/app/user/${props.id}/${props.linkName}`}>
        {props.linkName}
      </Link>
    </li>
  );
};

export default withRouter(function Header(props) {
  return (
    <div class="nav">
      <div class="nav__categories js-dropdown">
        <div class="nav__categories js-dropdown">
          <div class="nav__select">
            <div class="header__user-btn" data-dropdown-btn="user">
              <img
                src={`/assets/images/avatars/${
                  !props.username ? "" : props.username.charAt(0).toUpperCase()
                }.svg`}
                alt="avatar"
              />
              {props.username}
            </div>
          </div>
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
          <NavLink id={props.id} linkName="posts" />
          <NavLink id={props.id} linkName="activity" />
        </ul>
      </div>
    </div>
  );
});
