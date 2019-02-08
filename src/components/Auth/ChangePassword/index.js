import React, { Component } from "react";
import Header from "./header";
import Form from "./Form";
class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <Header />
        <main class="signup__main">
          <img class="signup__bg" src="/assets/images/signup-bg.png" alt="bg" />

          <div class="container">
            <div class="signup__container" style={{ maxWidth: "450px" }}>
              <div class="signup__head">
                <h3>Change your password</h3>
              </div>
              <Form />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ForgotPassword;
