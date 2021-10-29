import React, { Component } from "react";
import Header from "../components/Header/Header";
import RecommendedVideos from "../components/RecommendedVideos/RecommendedVideos";
import Content from "../components/Content/Content";
import Forum from "../components/Forum/Forum";
import data from "../data/video-details.json";

export default class Home extends Component {
  state = {
    heroVid: data[0],
    recommVids: data,
    forumComments: data[0],
  };
  handleClick = () => {
    console.log("handleClick");
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <Header />
        <Content heroVid={this.state.heroVid} />
        <Forum forumComments={this.state.forumComments.comments} />
        <RecommendedVideos
          recommVids={this.state.recommVids}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
