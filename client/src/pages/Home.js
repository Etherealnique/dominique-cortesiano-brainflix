import React, { Component } from "react";
import RecommendedVideos from "../components/RecommendedVideos/RecommendedVideos";
import Content from "../components/Content/Content";
import Forum from "../components/Forum/Forum";
import axios from "axios";

const API_URL = "http://localhost:8080";

export default class Home extends Component {
  state = {
    heroVid: null,
    recommVids: null,
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(`${API_URL}/videos`)
      .then((res) => {
        this.setState({ recommVids: res.data, heroVid: res.data[0] });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios
        .get(`${API_URL}/videos/${this.props.match.params.id}`)
        .then((response) => {
          this.setState({ heroVid: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      this.state.recommVids &&
      this.state.heroVid && (
        <div>
          <Content heroVid={this.state.heroVid} />
          <Forum forumComments={this.state.heroVid} />
          <RecommendedVideos
            recommVids={this.state.recommVids}
            heroVid={this.state.heroVid}
          />
        </div>
      )
    );
  }
}
