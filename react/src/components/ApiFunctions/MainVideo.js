import axios from "axios";
import { useState, useEffect } from "react";

async function fetchMainVideoFile(id) {
  try {
    const response = await axios.get(`http://localhost:8080/videos/${id}`);
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
    if (thisVideoId == null) {
      return;
    }
    fetchMainVideoFile(thisVideoId)
      .then((video) => setThisVideo(video))
      .catch((error) => console.error(error));
  }, [thisVideoId]);

  return thisVideo;
}

export default useThisVideo;
export { fetchMainVideoFile };
