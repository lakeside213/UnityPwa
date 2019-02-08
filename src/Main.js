import React, { Fragment } from "react";
import { TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Topic from "./components/Topic";
import User from "./components/User";
import CreatePost from "./components/CreatePost";
import { Switch, Route } from "react-router-dom";
const Main = ({ match }) => {
  return (
    <Fragment>
      <TransitionGroup>
        <Header />
        <Switch>
          <Route path={`${match.path}/user`} component={User} />
          <Route path={`${match.path}/topic`} component={Topic} />
          <Route path={`${match.path}/create`} component={CreatePost} />
          <Route path={`${match.path}/top`} component={Feed} />
          <Route path={`${match.path}/`} component={Feed} />
        </Switch>
      </TransitionGroup>
    </Fragment>
  );
};
export default Main;
