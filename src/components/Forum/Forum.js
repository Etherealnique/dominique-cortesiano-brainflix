import React from "react";
import "./Forum.scss";

export default function Forum(props) {
  console.log(props);
  return (
    <div className="forum">
      <p className="forum__title">JOIN THE CONVERSATION</p>
      <form id="myForm">
        <label className="forum__name-title" for="username">
          NAME
        </label>
        <br />
        <input
          className="forum__comment-box"
          type="text"
          name="name"
          placeholder="add new comments"
        />
        {/* <p className="forum__comments">{props.forumCommments}</p> */}
        <button className="forum__button" type="submit">
          COMMENT
        </button>
      </form>
    </div>
  );
}
