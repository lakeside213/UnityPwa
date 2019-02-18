import React, { Component, Fragment } from "react";
import Headings from "./postsHead";
import Post from "./post";

class Feed extends Component {
  render() {
    const { data } = this.props;
    return (
      <div class="posts">
        <div className="posts__head" />
        <div class="posts__body">
          {data.map(item => {
            return (
              <Fragment key={item._id}>
                <Post
                  id={item._id}
                  title={item.title}
                  category={item.category}
                  createdAt={item.createdAt}
                  views={item.views}
                  description={item.description}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Feed;
