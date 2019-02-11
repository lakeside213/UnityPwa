import React from "react";
import { Link } from "react-router-dom";
const myBtn = {
  display: "show",
  position: "fixed",
  bottom: "20px",
  right: "30px" /* Place the button 30px from the right */,
  zIndex: "99" /* Make sure it does not overlap */,
  border: "none" /* Remove borders */,
  outline: "none" /* Remove outline */,

  cursor: "pointer" /* Add a mouse pointer on hover */,
  padding: "15px" /* Some padding */,
  borderRadius: "10px" /* Rounded corners */,
  fontSize: "18px" /* Increase font size */
};
export default function CreatePostBtn() {
  return (
    <Link to="/app/create" style={myBtn} id="hideDesktop">
      <img
        src="/assets/images/New_Topic.svg"
        alt="New Topic"
        style={{ height: "40px" }}
      />
    </Link>
  );
}
