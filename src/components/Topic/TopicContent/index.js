import React, { Component } from "react";
import Loader from "../../utils/components/loader";
import Title from "./Title";
import TopicHead from "./TopicHead";
import TopicText from "./TopicText";
import TopicControls from "./TopicControls";
import TopicFooter from "./TopicFooter";
import TopicInfo from "./TopicInfo";
import FrequentPosters from "./FrequentPosters";
import Comment from "./comment";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost } from "../../../actions/postActions";
import TopicCalendar from "./TopicCalendar";

class TopicContent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;
    if (!this.props.post) {
      return <Loader />;
    }
    return (
      <div class="topics">
        <Title title={post.title} category={post.category} />
        <div class="topics__body">
          <div class="topics__content">
            <div class="topic">
              <TopicHead userId={post._user} createdAt={post.createdAt} />
              <div class="topic__content">
                <TopicText description={post.description} />
                <TopicFooter />
              </div>
            </div>
            <div class="topic">
              <div class="topic__content">
                <TopicInfo /> <TopicControls />
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
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPost }
  )(TopicContent)
);
