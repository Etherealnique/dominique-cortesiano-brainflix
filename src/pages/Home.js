import React, { Component } from "react";
import Header from "../components/Header/Header";
import RecommendedVideos from "../components/RecommendedVideos/RecommendedVideos";
import Content from "../components/Content/Content";
import Forum from "../components/Forum/Forum";
// import data from "../data/video-details.json";
import axios from "axios";

const API_URL =
  "https://project-2-api.herokuapp.com/videos?api_key=4647dc9f-39c6-41bf-a778-3df80b284b52";

export default class Home extends Component {
  state = {
    // heroVid: data[0],
    // recommVids: data,
    // isLoading: true,
    heroVid: {},
    recommVids: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        // console.log(res);
        this.setState({ recommVids: res.data.results });
      })
      .catch();
  }
  handleLike = (id) => {
    axios.put(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=4647dc9f-39c6-41bf-a778-3df80b284b52`
    );
    console.log(id);
    //     .then((res) => {
    // handleUpdate = (videoObj) => {
    //   const newVideo = this.state.recommVids.find((video) => {
    //     return turkey.id === turkeyObj.id;
    //   });
    //   console.log(this.state.featuredTurkey);
    //   this.setState({ featuredTurkey: newTurkey }, () => {
    //     console.log(this.state.featuredTurkey);
    //   });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.recommVids !== this.state.recommVids) {
  //     axios
  //       .get(API_URL)
  //       .then((res) => {
  //         const filteredArray = res.data.results.filter((vidoes) => {
  //           return video.id !== this.state.recommVids.id;
  //         });
  //         this.setState({ turkeys: filteredArray });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  // handleClick = (event, id) => {
  //   // console.log(event, id);
  //   const currentVid = this.state.recommVids.find((video) => video.id === id);
  //   console.log(currentVid);

  // this.setState({
  //   heroVid: currentVid,
  // recommVids:
  // [].filter((video) => currentVid.id !== video.id),
  // });
  // };

  render() {
    return (
      <div>
        <Header />
        <Content heroVid={this.state.heroVid} />
        <Forum forumComments={this.state.heroVid} />
        <RecommendedVideos
          recommVids={this.state.recommVids}
          // handleClick={this.handleClick}
        />
      </div>
    );
  }
}
