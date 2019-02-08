import React, { Component } from "react";
import Title from "./Title";
import TopicHead from "./TopicHead";
import TopicText from "./TopicText";
import TopicControls from "./TopicControls";
import TopicFooter from "./TopicFooter";
import TopicInfo from "./TopicInfo";
import FrequentPosters from "./FrequentPosters";
import Comment from "./comment";
import TopicCalendar from "./TopicCalendar";

class TopicContent extends Component {
  render() {
    return (
      <div class="topics">
        <Title />
        <div class="topics__body">
          <div class="topics__content">
            <div class="topic">
              <TopicHead />
              <div class="topic__content">
                <TopicText />
                <TopicFooter />
              </div>
            </div>
            <div class="topic">
              <div class="topic__content">
                <TopicInfo />
                <FrequentPosters />
                <TopicControls />
              </div>
            </div>
            <Comment />
          </div>
          <TopicCalendar />
        </div>
        <div class="topics__title">Suggested Topics</div>
      </div>
    );
  }
}
export default TopicContent;
