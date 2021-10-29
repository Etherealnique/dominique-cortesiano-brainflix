import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./Content.scss";

export default function Content(props) {
  console.log(props);
  return (
    <main className="content">
      <div classmane="content__hero-video">
        <video
          className="content__hero-video--image"
          controls
          poster="https://i.imgur.com/l2Xfgpl.jpg"
        ></video>
      </div>
      <h1 className="content__title">{props.heroVid.title}</h1>
      <div className="content__container-middle">
        <div className="content__container-left">
          <p className="content__creator">{`By ${props.heroVid.channel}`}</p>
          <p className="content__date"></p>
        </div>

        <section className="content__container-right">
          <section classname="content__container-eye">
            <img className="content__eye-image" alt="views" src={views} />
            <p classname="content__viewer-count">{props.heroVid.views}</p>
          </section>

          <section classname="content__container-view">
            <figure className="content__likes">
              <img
                onClick={() => {
                  props.handleButtonClick(props.heart);
                }}
                className="content__likes--icon"
                src={likes}
                alt="likes"
              />
              {props.heroVid.likes}
            </figure>
          </section>
        </section>
      </div>
      <p classname="content__body">{props.heroVid.content}</p>
      <aside classname="content__comments">3 comments</aside>
    </main>
  );
}
