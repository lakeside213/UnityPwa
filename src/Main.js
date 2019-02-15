import React, { Fragment } from "react";
import { TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Topic from "./components/Topic";
import User from "./components/User";
import CreatePost from "./components/CreatePost";
import CreatePostBtn from "./components/utils/components/createPostBtn";
import { Switch, Route, withRouter } from "react-router-dom";
const Main = ({ match }) => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path={`${match.path}/user/:id/:feed`} component={User} />
        <Route path={`${match.path}/user/:id`} component={User} />
        <Route path={`${match.path}/tags/:tag`} component={Feed} />
        <Route path={`${match.path}/categories/:category`} component={Feed} />
        <Route path={`${match.path}/topic/:id`} component={Topic} />

        <Route path={`${match.path}/create`} component={CreatePost} />
        <Route path={`${match.path}/:feed`} component={Feed} />
        <Route path={`${match.path}/`} component={Feed} />
      </Switch>
      <CreatePostBtn />
      <Footer />
    </Fragment>
  );
};
export default withRouter(Main);
