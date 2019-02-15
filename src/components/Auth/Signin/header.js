import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header class="signup__header">
      <div class="container">
        <div class="signup__logo">
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
            Unity
          </Link>
        </div>
        <div class="signup__header-content">
          <p>
            <a href="#">Don't have an account?</a>
          </p>
          <Link to="/auth/signup" class="btn">
            Sign-Up
          </Link>
        </div>
      </div>
    </header>
  );
}
