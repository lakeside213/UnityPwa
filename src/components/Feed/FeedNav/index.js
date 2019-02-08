import React, { Component } from "react";
import Dropdown from "./navDropdown";
import { NavLink } from "react-router-dom";
class FeedNav extends Component {
  render() {
    return (
      <div class="nav">
        <div class="nav__categories js-dropdown">
          <Dropdown name="All Categories">
            <ul class="dropdown__catalog row">
              <li class="col-xs-6">
                <a href="#" class="category">
                  <i class="bg-f9bc64" />
                  Hobbies
                </a>
              </li>
              <li class="col-xs-6">
                <a href="#" class="category">
                  <i class="bg-348aa7" />
                  Social
                </a>
              </li>
            </ul>
          </Dropdown>
          <Dropdown name="Tags">
            <div class="tags">
              <a href="#" class="bg-4f80b0">
                gaming
              </a>
              <a href="#" class="bg-424ee8">
                nature
              </a>
              <a href="#" class="bg-36b7d7">
                entertainment
              </a>
              <a href="#" class="bg-ef429e">
                selfie
              </a>
            </div>
          </Dropdown>
        </div>
        <div class="nav__menu js-dropdown">
          <Dropdown name="Latest">
            <ul class="dropdown__catalog">
              <li>
                <a href="#">Latest</a>
              </li>
              <li>
                <a href="#">Follow Feed</a>
              </li>
              <li>
                <a href="#">Top</a>
              </li>

              <li>
                <a href="#">Most Liked</a>
              </li>
            </ul>
          </Dropdown>
          <ul>
            <li>
              <NavLink to="/app/">Latest</NavLink>
            </li>
            <li>
              <NavLink to="/followfeed">Follow Feed</NavLink>
            </li>
            <li>
              <NavLink to="/app/top">Top</NavLink>
            </li>

            <li>
              <NavLink to="/liked">Most Liked</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedNav;
