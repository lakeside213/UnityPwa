import React from "react";
import { Link } from "react-router-dom";

export default function Category(props) {
  if (props.menu) {
    return (
      <li class="col-xs-6">
        <Link to={`/app/categories/${props.categoryName}`} className="category">
          <i />
          {props.categoryName}
        </Link>
      </li>
    );
  }
  return (
    <Link to={`/app/categories/${props.categoryName}`} className="category">
      <i />
      {props.categoryName}
    </Link>
  );
}
