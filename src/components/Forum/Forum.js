import React from "react";
import { v4 as uuidv4 } from "uuid";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Forum.scss";

export default function Forum(props) {
  console.log(uuidv4());
  return (
    <div key={123} className="forum">
      <p className="forum__title">JOIN THE CONVERSATION</p>
      <form className="forum__form">
        <img className="forum__avatar" alt="Mohan-muruge" src={avatar} />
        <br />
        <input
          className="forum__comment-box"
          type="text"
          name="name"
          placeholder="add new comments"
        />
        <button className="forum__button" type="submit">
          COMMENT
        </button>
      </form>
      <div className="forum__comments">
        {props.forumComments.comments.map((comment) => {
          // console.log(commentArr);
          return (
            <div key={uuidv4()}>
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
              <p>
                {
                  (comment.timestamp = new Date(
                    comment.timestamp
                  ).toLocaleDateString("en-US"))
                }
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
