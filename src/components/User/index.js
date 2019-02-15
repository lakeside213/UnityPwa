import React, { Component } from "react";
import Header from "./header";
import Feed from "./Feed";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProfile } from "../../actions/userActions";
import Loader from "../utils/components/loader";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.updateQuery = this.updateQuery.bind(this);
  }
  componentDidMount() {
    const { fetchProfile, match } = this.props;
    const id = match.params.id;
    const feed = match.params.feed;

    fetchProfile(id, feed);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const id = this.props.match.params.id;
      const feed = this.props.match.params.feed;

      this.props.fetchProfile(id, feed);
    }
  }
  updateQuery(query) {
    this.setState({ query });
    console.log(this.state.query);
  }
  render() {
    const { user, data } = this.props.profile;

    if (!user && !data) {
      return <Loader />;
    }
    return (
      <main>
        <div class="container">
          <Header
            username={user.username}
            id={user._id}
            updateQuery={this.updateQuery}
          />
          <Feed data={data} />
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.profile);
  return { profile: state.profile };
}
export default withRouter(
  connect(
    mapStateToProps,
    { fetchProfile }
  )(User)
);
