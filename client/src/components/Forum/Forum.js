import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Forum.scss";

export default function Forum(props, i) {
  return (
    <div key={i} className="forum">
      <p className="forum__title">JOIN THE CONVERSATION</p>

      <form className="forum__form">
        <br />
        <img className="forum__avatar" alt="Mohan-muruge" src={avatar} />
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
      <div className="forum__container">
        {props.forumComments.comments.map((comment, i) => {
          return (
            <div className="forum__comments">
              <figure className="forum__avatar-blank"></figure>
              <div className="forum__subsection" key={i}>
                <p className="forum__user">{comment.name}</p>

                <p className="forum__date">
                  {
                    (comment.timestamp = new Date(
                      comment.timestamp
                    ).toLocaleDateString("en-US"))
                  }
                </p>
              </div>
              <p className="forum__text">{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
