import axios from "axios";
import { useState, useEffect } from "react";

export async function fetchRelatedVideos() {
  try {
    const response = await axios.get(`http://localhost:8080/videos`);
    const videosLite = response.data;
    return videosLite;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function useAllVideos() {
  const [allOtherVideos, setAllOtherVideos] = useState([]);

  useEffect(() => {
    fetchRelatedVideos()
      .then((videos) => setAllOtherVideos(videos))
      .catch((error) => console.error(error));
  }, []);

  return allOtherVideos;
}
