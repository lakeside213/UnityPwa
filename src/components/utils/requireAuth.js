import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchAuth } from "../../actions/authActions";
export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.props.fetchAuth();
    }

    render() {
      return (
        <div>
          {this.props.auth ? (
            <ChildComponent {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: this.props.location }
              }}
            />
          )}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(
    mapStateToProps,
    { fetchAuth }
  )(ComposedComponent);
};
