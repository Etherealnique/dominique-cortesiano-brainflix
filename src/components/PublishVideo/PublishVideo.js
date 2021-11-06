// import React, { Component } from "react";
import React from "react";
import "./PublishVideo.scss";
import thumbnail from "../../assets/images/venice-canal.jpg";

export default function PublishVideo() {
  return (
    <main className="publish-video">
      <div className="publish-video__container">
        <h1 className="publish-video__title-main">Upload Video</h1>
        <p className="publish-video__title-thumbnail">VIDEO THUMBNAIL</p>
        <img
          className="publish-video__thumbnail"
          alt="venice-canal"
          src={thumbnail}
        />
        <section className="publish-video__subsection">
          <p className="publish-video__subtitle-video">TITLE YOUR VIDEO</p>
          <input
            className="publish-video__subtitle-video--comment"
            type="text"
            placeholder="Add a title to your video"
          ></input>
          <p className="publish-video__subtitle-description">
            ADD A VIDEO DESCRIPTION
          </p>
          <input
            className="publish-video__subtitle-description--comment"
            type="text"
            placeholder="Add a description to your video"
          ></input>
        </section>
      </div>
      <div className="publish-video__button--container">
        <button className="publish-video__button--cancel-tablet" type="submit">
          CANCEL
        </button>
        <button className="publish-video__button--publish" type="submit">
          PUBLISH
        </button>
        <button className="publish-video__button--cancel-mobile" type="submit">
          CANCEL
        </button>
      </div>
    </main>
  );
}
