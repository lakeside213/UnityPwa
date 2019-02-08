import React, { Component } from "react";
import FeedNav from "./FeedNav";
import Posts from "./Posts";
class Feed extends Component {
  render() {
    return (
      <main>
        <div class="container">
          <FeedNav />
          <Posts />
        </div>
      </main>
    );
  }
}

export default Feed;
