import React, { Component } from "react";

class TopicNav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__thread">
          <p>Thread Navigation:</p>
          <a href="#" className="nav__thread-btn nav__thread-btn--prev">
            <i className="icon-Arrow_Left" />
            Previous
          </a>
          <a href="#" className="nav__thread-btn nav__thread-btn--next">
            Next
            <i className="icon-Arrow_Right" />
          </a>
        </div>
      </div>
    );
  }
}

export default TopicNav;
