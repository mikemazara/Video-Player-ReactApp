import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = "7201c760-19ae-48b7-8316-ea927c367d11";

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

function useAllOtherVideos(thisVideoId) {
  const [allOtherVideos, setAllOtherVideos] = useState([]);

  useEffect(() => {
    fetchRelatedVideos(thisVideoId)
      .then((videos) => setAllOtherVideos(videos))
      .catch((error) => console.error(error));
  }, [thisVideoId]);

  return allOtherVideos;
}

export default useAllOtherVideos;
export { fetchRelatedVideos };
