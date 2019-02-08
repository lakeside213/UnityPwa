import React from "react";
import Form from "./form";
import Posts from "../Feed/Posts";
export default function CreatePost() {
  return (
    <main>
      <div class="container">
        <div class="create">
          <div class="create__head">
            <div class="create__title">
              <img src="/assets/images/New_Topic.svg" alt="New topic" />
              Create New Thread
            </div>
            <span>Forum Guidelines</span>
          </div>
          <Form />
        </div>
        <div class="topics__title">Suggested Topics</div>
        <Posts />
      </div>
    </main>
  );
}
