// import React, { Component } from "react";
import React from "react";
import Header from "../components/Header/Header";
import PublishVideo from "../components/PublishVideo/PublishVideo";

// class UploadPage extends Component {
//     state = {
//       heroVid: data[0],
//       recommVids: data,
//     };
//   handleClick = (event, id) => {
//     // console.log(event, id);
//     const currentVid = this.state.recommVids.find((video) => video.id === id);
//     console.log(currentVid);

//     this.setState({
//       heroVid: currentVid,
//       recommVids: data.filter((video) => currentVid.id !== video.id),
//     });
//   };

//   render() {

export default function UploadPage() {
  return (
    <div>
      <Header />
      <PublishVideo />
      {/* <Content heroVid={this.state.heroVid} />
          <Forum forumComments={this.state.heroVid} />
          <RecommendedVideos
            recommVids={this.state.recommVids}
            handleClick={this.handleClick}
          /> */}
    </div>
  );
}
