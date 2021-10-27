import React from "react";
import Comments from "../../data/video-details.json";

export default function Forum() {
  console.log(Comments);
  return (
    <div className="forum__container">
      <h1>FORUM</h1>
      <h2 className="forum__title">JOIN THE CONVERSATION</h2>
      <form id="myForm">
        <label className="forum__name-title" for="username">
          NAME
        </label>
        <br />
        <input
          className="forum__comment-name--box"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </form>
    </div>
  );
}
