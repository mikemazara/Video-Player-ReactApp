import "./App.scss";
import { useState } from "react";
import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import videosLite from "./assets/data/videos.json";
import videos from "./assets/data/video-details.json";
import Comments from "./components/comment/comments";
import NextVideo from "./components/next-videos/next-video";

// made functions to fetch data from json files in order to mimic an api call
function fetchMainVideoFile(id) {
  return videos.filter((obj) => obj.id === id)[0];
}

function fetchRelatedVideos(id) {
  const allOtherVideos = videosLite.filter((obj) => obj.id !== id);
  return allOtherVideos;
}

function App() {
  // hard coded the first id to be the first video in the json file for now
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
