import React, { Component } from "react";
import Dropdown from "./navDropdown";
import Tag from "../../utils/components/tag";
import Category from "../../utils/components/category";
import NavLink from "../../utils/components/navLink";
import { withRouter } from "react-router-dom";
class FeedNav extends Component {
  state = {
    tag: "all tags",
    category: "all categories"
  };
  componentDidMount() {
    const { tag, category } = this.props.match.params;
    if (tag) {
      this.setState({ tag });
    }
    if (category) {
      this.setState({ category });
    }
  }
  render() {
    let { tag, category } = this.state;
    return (
      <div class="nav">
        <div class="nav__categories js-dropdown">
          <Dropdown name={category}>
            <ul class="dropdown__catalog row">
              <Category categoryName="gaming " categoryColor="4f87b0" />
              <Category categoryName="all " categoryColor="4f87b0" />
            </ul>
          </Dropdown>
          <Dropdown name={tag}>
            <div class="tags">
              <Tag tagName="all " tagColor="4f87b0" />
              <Tag tagName="gaming" tagColor="4f80b0" />
            </div>
          </Dropdown>
        </div>
        <div class="nav__menu js-dropdown">
          <Dropdown name="Latest">
            <ul class="dropdown__catalog">
              <NavLink linkName="latest" />
            </ul>
          </Dropdown>
          <ul>
            <NavLink linkName="latest" />
            <li>
              <NavLink to="/app/followfeed">Follow Feed</NavLink>
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

export default withRouter(FeedNav);
