import { useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import Hero from "../../components/Hero/Hero.js";
import Comments from "../../components/Comment/Comments.js";
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
import useAllOtherVideos from "../../components/ApiFunctions/VideoList";

function HomePage() {
  const [thisVideoId, setThisVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  const thisVideo = useThisVideo(thisVideoId);
  const allOtherVideos = useAllOtherVideos(thisVideoId);

  if (!thisVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <Hero videoDetails={thisVideo} />
      <Comments comments={thisVideo.comments} />
      <NextVideo videos={allOtherVideos} setThisVideoId={setThisVideoId} />
    </div>
  );
}

export default HomePage;
