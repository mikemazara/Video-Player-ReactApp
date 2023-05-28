import { useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import Hero from "../../components/Hero/Hero.js";
import Comments from "../../components/Comment/Comments";
import NextVideo from "../../components/NextVideos/NextVideo";
import {
  BrowserRouter,
  Routes,
  Route,
  Next,
  useParams,
  Navigate,
} from "react-router-dom";
import useThisVideo from "../../components/ApiFunctions/MainVideo";
import useAllVideos from "../../components/ApiFunctions/VideoList";

function VideoDetails() {
  let { id } = useParams();

  const allVideos = useAllVideos();

  const thisVideoId = id || allVideos[0]?.id;

  const thisVideo = useThisVideo(thisVideoId);

  const allOtherVideos = allVideos.filter((obj) => obj.id !== thisVideoId);

  if (thisVideo == null) {
    return <div>Loading...</div>;
  }
  console.log({ thisVideo, thisVideoId });

  return (
    <div className="App">
      <Header />
      <Hero videoDetails={thisVideo} />
      <Comments comments={thisVideo.comments} />
      <NextVideo videos={allOtherVideos} />
    </div>
  );
}

export default VideoDetails;
