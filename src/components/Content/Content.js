import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./Content.scss";

export default function Content(props) {
  console.log(props);
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
            <section className="content__container-eye">
              <figure className="content__eye">
                <img className="content__eye-image" alt="views" src={views} />
                {props.heroVid.views}
              </figure>
            </section>

            <section className="content__container-views">
              <figure className="content__likes">
                <img
                  onClick={() => {
                    props.handleButtonClick(props.event);
                  }}
                  className="content__likes--icon"
                  src={likes}
                  alt="likes"
                />
                <span className="content__views">{props.heroVid.likes}</span>
              </figure>
            </section>
          </section>
        </div>
        <p className="content__body">{props.heroVid.description}</p>
        <aside className="content__comments">3 comments</aside>
      </div>
    </main>
  );
}
