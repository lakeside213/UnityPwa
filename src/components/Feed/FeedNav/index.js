import React, { Component } from "react";
import Dropdown from "./navDropdown";
import Tag from "../../utils/components/tag";
import Category from "../../utils/components/category";
import NavLink from "../../utils/components/navLink";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterPosts } from "../../../actions/postActions";
import CATEGORIES from "../../utils/data/categories";
import TAGS from "../../utils/data/tags";
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
      this.props.filterPosts(category);
    }
  }
  render() {
    let { tag, category } = this.state;
    return (
      <div class="nav">
        <div class="nav__categories js-dropdown">
          <Dropdown name={category}>
            <ul class="dropdown__catalog row">
              {CATEGORIES.map(category => (
                <Category
                  key={category.categoryName}
                  categoryName={category.categoryName}
                  categoryColor={category.categoryColor}
                  menu={true}
                />
              ))}

              <Category categoryName="all " categoryColor="4f87b0" />
            </ul>
          </Dropdown>
          <Dropdown name={tag}>
            <div class="tags">
              {TAGS.map(tag => (
                <Tag
                  key={tag.tagName}
                  tagName={tag.tagName}
                  tagColor={tag.tagColor}
                />
              ))}
              <Tag tagName="all " tagColor="4f87b0" />
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
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { filterPosts }
  )(FeedNav)
);
