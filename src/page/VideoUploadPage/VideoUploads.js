import Header from "../../components/Header/Header";
import Uploads from "../../components/Uploads/Uploads";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const VideoUploads = () => {
  return (
    <div className="App">
      <Header />
      <Uploads />
    </div>
  );
};

export default VideoUploads;
