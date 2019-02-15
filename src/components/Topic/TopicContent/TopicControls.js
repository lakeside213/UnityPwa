import React, { Component } from "react";
import { bookmarkPost } from "../../../actions/userActions";
import { connect } from "react-redux";
class TopicControls extends Component {
  constructor(props) {
    super(props);

    this.bookmarkBtn = this.bookmarkBtn.bind(this);
  }
  bookmarkBtn(e) {
    const { bookmarkPost, post } = this.props;
    console.log(post);
    e.preventDefault();
    bookmarkPost(post);
  }
  render() {
    const { bookmarkPost, post, bookmarked } = this.props;
    console.log(post);
    return (
      <div class="topics__control">
        <a href="#" class="btn" onClick={this.bookmarkBtn}>
          <i class="icon-Bookmark" />
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </a>
        <a href="#" class="btn">
          <i class="icon-Share_Topic" />
          Share
        </a>

        <a href="#" class="btn btn--type-02" data-visible="desktop">
          <i class="icon-Reply_Fill" />
          Reply
        </a>
      </div>
    );
  }
}
export default connect(
  null,
  { bookmarkPost }
)(TopicControls);
