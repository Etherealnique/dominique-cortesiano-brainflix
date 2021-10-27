import React from "react";
import Header from "../components/Header/Header";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import RecommendedVideos from "../components/RecommendedVideos/RecommendedVideos";
import Description from "../components/Description/Description";
import Forum from "../components/Forum/Forum";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroVideo />
      <Description />
      <Forum />
      <RecommendedVideos />
    </div>
  );
}
