import "./App.scss";
import { useState } from "react";
import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import videosLite from "./assets/data/videos.json";
import videos from "./assets/data/video-details.json";
import Comments from "./components/comment/comments";
import NextVideo from "./components/next-videos/next-video";
import { BrowserRouter, Routes, Route, Next } from "react-router-dom";
import axios from "axios";

const apiKey = "7201c760-19ae-48b7-8316-ea927c367d11";

const fetchVideos = async () => {
  const response = await axios.get(
    `https://project-2-api.herokuapp.com/videos?api_key=7201c760-19ae-48b7-8316-ea927c367d11`
  );
  return response.data;
};

function fetchMainVideoFile(id) {
  const thisVideo = videos.find((obj) => obj.id === id);
  return thisVideo;
}

function fetchRelatedVideos(id) {
  const allOtherVideos = videosLite.filter((obj) => obj.id !== id);
  return allOtherVideos;
}

function App() {
  const [thisVideoId, setThisVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const thisVideo = fetchMainVideoFile(thisVideoId);
  const allOtherVideos = fetchRelatedVideos(thisVideoId);

  return (
    <div className="App">
      <Header />
      <Hero videoDetails={thisVideo} />
      <Comments comments={thisVideo.comments} />
      <NextVideo videos={allOtherVideos} setThisVideoId={setThisVideoId} />
    </div>
  );
}

export default App;
