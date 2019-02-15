import React, { Component } from "react";
import Category from "../../utils/components/category";
class Heading extends Component {
  render() {
    const { title, category, tags } = this.props;
    return (
      <div class="topics__heading">
        <h2 class="topics__heading-title">{title}</h2>
        <div class="topics__heading-info">
          <Category categoryName={category} />

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
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
