import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = "7201c760-19ae-48b7-8316-ea927c367d11";

export async function fetchRelatedVideos() {
  try {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
    );
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
