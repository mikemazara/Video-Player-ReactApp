import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import Comments from "./components/comment/comments";
import NextVideo from "./components/next-videos/next-video";
import {
  BrowserRouter,
  Routes,
  Route,
  Next,
  useParams,
  Navigate,
} from "react-router-dom";
import axios from "axios";

const apiKey = "7201c760-19ae-48b7-8316-ea927c367d11";

async function fetchMainVideoFile(id) {
  try {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`
    );
    const video = response.data;
    return video;
  } catch (error) {
    console.error(error);
    return {};
  }
}

async function fetchRelatedVideos(id) {
  try {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
    );
    const videosLite = response.data;
    const allOtherVideos = videosLite.filter((obj) => obj.id !== id);
    return allOtherVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function App() {
  const [thisVideoId, setThisVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [thisVideo, setThisVideo] = useState(null);
  const [allOtherVideos, setAllOtherVideos] = useState([]);

  useEffect(() => {
    fetchRelatedVideos(thisVideoId)
      .then((videos) => setAllOtherVideos(videos))
      .catch((error) => console.error(error));
  }, [thisVideoId]);

  useEffect(() => {
    fetchMainVideoFile(thisVideoId)
      .then((video) => setThisVideo(video))
      .catch((error) => console.error(error));
  }, [thisVideoId]);

  if (!thisVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      {/* <Hero videoDetails={thisVideo} />
      <Comments comments={thisVideo.comments} />
      <NextVideo videos={allOtherVideos} setThisVideoId={setThisVideoId} /> */}
      {/* refactor return statement to include different routes for set new url everytime a new video is added to the hero section */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero videoDetails={thisVideo} />} />
          <Route path="/:id" element={<Hero videoDetails={thisVideo} />} />
        </Routes>
      </BrowserRouter>
      <Comments comments={thisVideo.comments} />
      <NextVideo videos={allOtherVideos} setThisVideoId={setThisVideoId} />
    </div>
  );
}

export default App;
