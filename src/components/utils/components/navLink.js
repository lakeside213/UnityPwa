import React from "react";
import { NavLink, withRouter } from "react-router-dom";

export default withRouter(function Link(props) {
  return (
    <li className={props.match.params.feed === props.linkName ? "active" : ""}>
      <NavLink to={`/app/${props.linkName}`}>{props.linkName}</NavLink>
    </li>
  );
});
