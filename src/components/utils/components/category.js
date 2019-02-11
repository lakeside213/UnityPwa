import React from "react";
import { Link } from "react-router-dom";

export default function Category(props) {
  return (
    <li class="col-xs-6">
      <Link to={`/app/categories/${props.categoryName}`} className="category">
        <i style={{ backgroundColor: `#${props.categoryColor}` }} />
        {props.categoryName}
      </Link>
    </li>
  );
}
