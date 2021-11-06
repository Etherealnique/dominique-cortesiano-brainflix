import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./RecommendedVideos.scss";

export default function RecommendedVideos(props) {
  console.log(props.recommVids);
  return (
    <div className="recommended">
      <p className="recommended__title">NEXT VIDEOS</p>
      {props.recommVids
        .filter((filteredarr) => filteredarr.id !== props.heroVid.id)
        .map((vid) => {
          return (
            <div key={uuidv4()} className="recommended__container">
              <div className="recommended__content">
                <Link to={`/videos/${vid.id}`}>
                  <img
                    className="recommended__image"
                    src={vid.image}
                    alt={vid.title}
                  />
                </Link>
              </div>

              <p className="recommended__subtitle">{vid.title}</p>
              <p className="recommended__creator">{vid.channel}</p>
            </div>
          );
        })}
    </div>
  );
}
