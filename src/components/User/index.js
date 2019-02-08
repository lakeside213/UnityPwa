import React, { Component } from "react";
import Header from "./header";
import Posts from "./Feed";
class User extends Component {
  render() {
    return (
      <main>
        <div class="container">
          <Header />
          <Posts />
        </div>
      </main>
    );
  }
}

export default User;
