import React from "react";
import Header from "../components/Header/Header/Header";
import HeroVideo from "../components/Header/HeroVideo/HeroVideo";
import RecommendedVideos from "../components/Header/RecommendedVideos/RecommendedVideos";
import Description from "../components/Header/Description/Description";
import Forum from "../components/Header/Forum/Forum";

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
