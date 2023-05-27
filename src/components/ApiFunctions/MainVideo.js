import axios from "axios";
import { useState, useEffect } from "react";

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

function useThisVideo(thisVideoId) {
  const [thisVideo, setThisVideo] = useState(null);

  useEffect(() => {
    fetchMainVideoFile(thisVideoId)
      .then((video) => setThisVideo(video))
      .catch((error) => console.error(error));
  }, [thisVideoId]);

  return thisVideo;
}

export default useThisVideo;
export { fetchMainVideoFile };
