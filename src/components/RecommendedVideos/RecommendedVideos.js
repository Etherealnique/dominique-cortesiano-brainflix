import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./RecommendedVideos.scss";

export default function RecommendedVideos(props) {
  console.log(props);

  return (
    <div>
      {props.recommVids.map((vid) => {
        return (
          <div key={uuidv4()} className="recommended__container">
            <p
              className="recommended__info"
              onClick={(event) => props.handleClick(event, vid.id)}
            >
              {vid.title},{vid.channel},
              <img
                className="recommended__image"
                src={vid.image}
                alt={vid.title}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
