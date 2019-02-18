import React, { Component } from "react";
import TopicNav from "./TopicNav";
import TopicContent from "./TopicContent";
import Posts from "../Feed/Posts";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/postActions";
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
    const { fetchPost, fetchUser, auth, match } = this.props;
    const id = match.params.id;
    fetchPost(id);
    this.setState({ postId: id });
    if (auth) {
      fetchUser();
    }
  }

  render() {
    const { post, user, comments, auth, poster } = this.props;

    return (
      <main>
        <div class="container">
          <TopicNav />
          {post && poster ? (
            <TopicContent
              post={post}
              user={user}
              poster={poster}
              comments={comments}
              auth={auth}
            />
          ) : (
            <Loader />
          )}
        </div>
      </main>
    );
  }
}

function mapStateToProps({ posts, user, auth }, ownProps) {
  return {
    post: posts.post.post,
    poster: posts.post.user,
    comments: posts.post.comments,
    auth: auth.authenticated,
    user
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPost, fetchUser }
  )(Topic)
);
