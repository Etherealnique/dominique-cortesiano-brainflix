import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./Content.scss";

export default function Content(props) {
  // console.log(props.heroVid.comments);
  return (
    <main className="content">
      <div className="content__hero-video">
        <video
          className="content__hero-video--image"
          controls
          poster={props.heroVid.image}
        ></video>
      </div>
      <div className="content__description">
        <h1 className="content__title">{props.heroVid.title}</h1>
        <div className="content__container-middle">
          <div className="content__container-left">
            <p className="content__creator">{`By ${props.heroVid.channel}`}</p>
            <p className="content__date">
              {new Date(props.heroVid.timestamp).toLocaleDateString("en-US")}
            </p>
          </div>
          <section className="content__container-right">
            <figure className="content__container-views">
              <img className="content__eye-icon" alt="views" src={views} />
              <p className="content__views-count">{props.heroVid.views}</p>
            </figure>
            <figure className="content__container-likes">
              <img className="content__likes-icon" src={likes} alt="likes" />
              <p className="content__likes-count">{props.heroVid.likes}</p>
            </figure>
          </section>
        </div>
        <p className="content__body">{props.heroVid.description}</p>
        <aside>
          <p className="content__comments">
            {props.heroVid.comments.length} comments
          </p>
        </aside>
      </div>
    </main>
  );
}
