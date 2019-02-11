import React, { Component, Fragment } from "react";
import Headings from "./postsHead";
import Post from "./post";
import { fetchPosts } from "../../../actions/postActions";
import _ from "lodash";
import { connect } from "react-redux";
class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <Fragment key={post._id}>
          <Post
            id={post._id}
            title={post.title}
            category={post.category}
            userID={post._user}
          />
        </Fragment>
      );
    });
  }
  render() {
    console.log(this.props.posts);
    return (
      <div class="posts">
        <Headings />
        <div class="posts__body">{this.renderPost()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
