import React from "react";
import { Link } from "react-router-dom";

export default function Tag(props) {
  return (
    <Link
      to={`/app/tags/${props.tagName}`}
      style={{ backgroundColor: `#${props.tagColor}` }}
    >
      {props.tagName}
    </Link>
  );
}
