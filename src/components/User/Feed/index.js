import React, { Component } from "react";
import Headings from "./postsHead";
import Post from "./post";

class Posts extends Component {
  render() {
    return (
      <div class="posts">
        <div className="posts__head" />
        <div class="posts__body">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default Posts;
