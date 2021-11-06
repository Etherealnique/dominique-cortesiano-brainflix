import React, { Component } from "react";
import Header from "../components/Header/Header";
import RecommendedVideos from "../components/RecommendedVideos/RecommendedVideos";
import Content from "../components/Content/Content";
import Forum from "../components/Forum/Forum";
import axios from "axios";

const API_URL =
  "https://project-2-api.herokuapp.com/videos?api_key=4647dc9f-39c6-41bf-a778-3df80b284b52";

export default class Home extends Component {
  state = {
    heroVid: null,
    recommVids: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        this.setState({ recommVids: res.data });
        return axios.get(
          `https://project-2-api.herokuapp.com/videos/${res.data[0].id}?api_key=4647dc9f-39c6-41bf-a778-3df80b284b52`
        );
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ heroVid: res.data });
      })

      .catch();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.match.params.id, "prev props");
    console.log(prevState, "prev state");
    console.log(this.props.match.params.id, "current props");
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=4647dc9f-39c6-41bf-a778-3df80b284b52`
        )
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
          <Header />
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
