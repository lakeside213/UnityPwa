import React, { Component } from "react";
import TopicNav from "./TopicNav";
import TopicContent from "./TopicContent";
import Posts from "../Feed/Posts";
class Topic extends Component {
  render() {
    return (
      <main>
        <div class="container">
          <TopicNav />
          <TopicContent />
          <Posts />
        </div>
      </main>
    );
  }
}

export default Topic;
