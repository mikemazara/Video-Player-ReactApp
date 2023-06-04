import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import VideoDetails from "./page/VideoDetailsPage/VideoDetails";
import VideoUploads from "./page/VideoUploadPage/VideoUploads";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
