import React, { Component } from "react";
import TopicNav from "./TopicNav";
import TopicContent from "./TopicContent";
import Posts from "../Feed/Posts";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost, fetchComments } from "../../actions/postActions";
import { fetchUser } from "../../actions/authActions";
import Loader from "../utils/components/loader";
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: ""
    };
  }
  componentDidMount() {
    const { fetchPost, fetchUser, fetchComments, match } = this.props;
    const id = match.params.id;

    this.setState({ postId: id });
    fetchUser();
    fetchPost(id);
    fetchComments(id);
  }

  render() {
    const { post, user, comments } = this.props;
    return (
      <main>
        <div class="container">
          <TopicNav />
          {post && user ? (
            <TopicContent post={post} user={user} comments={comments} />
          ) : (
            <Loader />
          )}
        </div>
      </main>
    );
  }
}

function mapStateToProps({ posts, user, comments }, ownProps) {
  return { post: posts[ownProps.match.params.id], user, comments };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPost, fetchComments, fetchUser }
  )(Topic)
);
