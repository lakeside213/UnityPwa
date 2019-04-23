import React, { Component, Fragment } from "react";
import "./animation.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Toasts from "./components/utils/toasts";
import Auth from "./components/Auth";
import Main from "./Main";
import { connect } from "react-redux";
import { fetchUser } from "./actions/authActions";
const supportsHistory = "pushState" in window.history;

class App extends Component {
  componentDidMount() {
    let { auth, fetchUser } = this.props;
    if (auth  ) {
      fetchUser();
    }
  }
  render() {
    return (
      <Router forceRefresh={!supportsHistory}>
        <ScrollToTop>
          <Route
            render={({ location }) => (
              <Fragment>
                <Switch location={location}>
                  <Redirect exact from="/" to="/app" />
                  <Route component={Main} path="/app" />
                  <Route component={Auth} path="/auth" />
                </Switch>
                <Toasts />
              </Fragment>
            )}
          />
        </ScrollToTop>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
