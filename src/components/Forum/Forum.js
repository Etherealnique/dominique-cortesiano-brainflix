import React from "react";
import Comments from "../../data/video-details.json";
import "./Forum.scss";

export default function Forum() {
  console.log(Comments);
  return (
    <div className="forum">
      <p className="forum__title">JOIN THE CONVERSATION</p>
      <form id="myForm">
        <label className="forum__name-title" for="username">
          NAME
        </label>
        <br />
        <input
          className="forum__comment-name--box"
          type="text"
          name="name"
          placeholder="add new comments"
        />

        <button class="forum__button" type="submit">
          COMMENT
        </button>
      </form>
    </div>
  );
}
