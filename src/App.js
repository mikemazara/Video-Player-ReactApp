import "./App.scss";
import { useState, useEffect } from "react";
import HomePage from "./page/HomePage/HomePage";
import VideoDetails from "./page/VideoDetailsPage/VideoDetails";
import {
  BrowserRouter,
  Routes,
  Route,
  Next,
  useParams,
  Navigate,
} from "react-router-dom";
import useThisVideo from "./components/ApiFunctions/MainVideo";
import useAllOtherVideos from "./components/ApiFunctions/VideoList";
import VideoUploads from "./page/VideoUploadPage/VideoUploads";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDetails />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/upload" element={<VideoUploads />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
