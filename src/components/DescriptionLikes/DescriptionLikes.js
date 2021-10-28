import Description from "../Description/Description";
import React, { Component } from "react";

export default class DescriptionLikes extends Component {
  render() {
    return (
      <div className="container">
        {this.props.hearts.map((heart) => {
          return (
            <Description
              heart={heart}
              // handleUpvote={this.props.handleUpvote}
            />
          );
        })}
      </div>
    );
  }
}
