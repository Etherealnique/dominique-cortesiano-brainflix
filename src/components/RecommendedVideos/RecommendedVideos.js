import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./RecommendedVideos.scss";

export default function RecommendedVideos(props) {
  return (
    <div className="recommended">
      <p className="recommended__title">NEXT VIDEOS</p>
      {props.recommVids.map((vid) => {
        return (
          <div key={uuidv4()} className="recommended__container">
            <div
              className="recommended__content"
              onClick={(event) => props.handleClick(event, vid.id)}
            >
              <img
                className="recommended__image"
                src={vid.image}
                alt={vid.title}
              />
            </div>

            <p className="recommended__subtitle">
              {vid.title}
              <p className="recommended__creator">{vid.channel}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
