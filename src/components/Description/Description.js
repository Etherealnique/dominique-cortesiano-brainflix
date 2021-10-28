import React from "react";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import "./Description.scss";

export default function Description(props) {
  return (
    <main className="description">
      <h1 className="description__title">BMX Rampage:2021 Highlights</h1>
      <div className="description__container-middle">
        <div className="description__container-left">
          <p className="description__creator">By Red Crow</p>
          <p className="description__date">07/11/2021</p>
        </div>

        <section className="description__container-right">
          <section classname="description__container-eye">
            <img className="description__eye-image" alt="views" src={views} />
            <p classname="description__viewer-count">1,001,023</p>
          </section>

          <section classname="description__container-view">
            <figure className="description__likes">
              <img
                onClick={() => {
                  props.handleButtonClick(props.heart);
                }}
                className="description__likes--icon"
                src={likes}
                alt="likes"
              />
            </figure>
          </section>
        </section>
      </div>
      <p classname="description__body">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
      <aside classname="description__comments">3 comments</aside>
    </main>
  );
}
