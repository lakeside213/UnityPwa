import React, { Component } from "react";
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
import Snackbar from "./components/Snackbar";
import Auth from "./components/Auth";
import Main from "./Main";
import { connect } from "react-redux";
import { fetchUser } from "./actions/authActions";
const supportsHistory = "pushState" in window.history;

class App extends Component {
  state = {
    loggedIn: false
  };
  componentDidMount() {
    let { auth, fetchUser } = this.props;
    if (auth) {
      fetchUser();
    }
  }
  render() {
    const { loggedIn } = this.state;
    return (
      <Router forceRefresh={!supportsHistory}>
        <ScrollToTop>
          <Route
            render={({ location }) => (
              <div>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={{
                      enter: 1000,
                      exit: 1000
                    }}
                  >
                    <Switch location={location}>
                      <Redirect exact from="/" to="/app" />
                      <Route component={Main} path="/app" />
                      <Route component={Auth} path="/auth" />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
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
