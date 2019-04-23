import React, { Component, Fragment } from "react";
import Headings from "./postsHead";
import Post from "./post";
import { fetchPosts } from "../../../actions/postActions";
import _ from "lodash";
import { connect } from "react-redux";
import Loader from "../../utils/components/loader";
class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPost() {
    return this.props.posts.map(post => {
      return (
        <Fragment key={post._id}>
          <Post
            id={post._id}
            title={post.title}
            category={post.category}
            userID={post._user}
            views={post.views}
            createdAt={post.createdAt}
            tags={post.tags}
          />
        </Fragment>
      );
    });
  }
  render() {
    if (!this.props.posts) {
      return <Loader />;
    }
    return (
      <div class="posts">
        <Headings />
        <div class="posts__body">{this.renderPost()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.posts };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
