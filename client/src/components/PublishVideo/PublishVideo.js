import React from "react";
import axios from "axios";
import "./PublishVideo.scss";
import thumbnail from "../../assets/images/venice-canal.jpg";

const API_URL = "http://localhost:8080";

export default function PublishVideo({ history }) {
  const uploadVid = (event) => {
    event.preventDefault();
    const newSingleVid = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: `${API_URL}/images/venice-canal.jpg`,
    };

    axios
      .post("http://localhost:8080/videos", newSingleVid)
      .then(() => console.log("You posted a new video!"))
      .catch((err) => {
        console.log(err);
      });

    alert("Successful Upload!");
    history.push("/");
  };

  return (
    <main className="publish-video">
      <div className="publish-video__container">
        <h1 className="publish-video__title-main">Upload Video</h1>

        <p className="publish-video__title-thumbnail">VIDEO THUMBNAIL</p>
        <div className="publish-video__desktop--container">
          <img
            className="publish-video__thumbnail"
            alt="venice-canal"
            src={thumbnail}
          />

          <form onSubmit={uploadVid} className="publish-video__subsection">
            <p className="publish-video__subtitle-video">TITLE YOUR VIDEO</p>
            <input
              name="title"
              className="publish-video__subtitle-video--comment"
              type="text"
              placeholder="Add a title to your video"
            ></input>
            <div className="publish-video__button--divider">
              <p className="publish-video__subtitle-description">
                ADD A VIDEO DESCRIPTION
              </p>
              <input
                name="description"
                className="publish-video__subtitle-description--comment"
                type="text"
                placeholder="Add a description to your video"
              ></input>
            </div>
            <div className="publish-video__button--container">
              <button className="publish-video__button--cancel-tablet">
                CANCEL
              </button>
              <button className="publish-video__button--publish" type="submit">
                PUBLISH
              </button>
              <button className="publish-video__button--cancel-mobile">
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="publish-video__button--desktop-divider" />
    </main>
  );
}
