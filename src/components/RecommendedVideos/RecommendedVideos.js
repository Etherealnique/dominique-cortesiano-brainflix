import React from "react";
import "./RecommendedVideos.scss";

export default function RecommendedVideos(props) {
  console.log(props);

  return (
    <div>
      {props.recommVids.map((vid) => {
        return (
          <div>
            <p onClick={props.handleClick}>
              {vid.title},{vid.channel},
            </p>
            <img className="recommedated__image" src={vid.image} />
            {/* <div url={vid.video}></div> */}
            {/* <video src={vid.video} onPlaying={props.video} controls /> */}
          </div>
        );
      })}
    </div>
  );
}
