import React, { Component } from "react";
import Headings from "./postsHead";
import Post from "./post";

class Posts extends Component {
  render() {
    return (
      <div class="posts">
        <Headings />
        <div class="posts__body">
          <Post />
        </div>
      </div>
    );
  }
}

export default Posts;
