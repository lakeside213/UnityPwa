import React from "react";
import Form from "./form";

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
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}
