import React, { Component, Fragment } from "react";
import _ from "lodash";
import Title from "./Title";
import TopicHead from "./TopicHead";
import TopicText from "./TopicText";
import TopicControls from "./TopicControls";
import TopicFooter from "./TopicFooter";
import TopicInfo from "./TopicInfo";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TopicCalendar from "./TopicCalendar";

class TopicContent extends Component {
  constructor(props) {
    super(props);
    this.commentForm = React.createRef();
    this.state = {
      responseUserId: ""
    };
    this.replyComment = this.replyComment.bind(this);
  }

  renderComments() {
    return _.map(this.props.comments, comment => {
      return (
        <Fragment key={comment._id}>
          <Comment
            createdAt={comment.createdAt}
            description={comment.description}
            _user={comment._user}
            likes={comment.likes}
            _responseUser={comment._responseUser}
            replyComment={this.replyComment}
          />
        </Fragment>
      );
    });
  }
  replyComment(_user) {
    window.scrollTo(0, this.commentForm.current.offsetTop);
    this.setState({ responseUserId: _user });
  }

  render() {
    const { post, user, comments, replyComment, responseUserId } = this.props;

    return (
      <div class="topics">
        <Title title={post.title} category={post.category} />
        <div class="topics__body">
          <div class="topics__content">
            <div class="topic">
              <TopicHead user={user} createdAt={post.createdAt} />
              <div class="topic__content">
                <TopicText description={post.description} />
                <TopicFooter
                  views={post.views}
                  _id={post._id}
                  likes={post.likes.length}
                  liked={post.likes.includes(user._id)}
                />
              </div>
            </div>
            <div class="topic">
              <div class="topic__content">
                <TopicInfo
                  user={user}
                  createdAt={post.createdAt}
                  views={post.views}
                  likes={post.likes.length}
                  comments={_.size(comments)}
                />{" "}
                <TopicControls
                  post={post._id}
                  bookmarked={user.bookmarks.includes(post._id)}
                />
              </div>
            </div>
            <div ref={this.commentForm}>
              <CommentForm responseUserId={responseUserId} postId={post._id} />
            </div>

            {this.renderComments()}
          </div>
          <TopicCalendar />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(TopicContent)
);
