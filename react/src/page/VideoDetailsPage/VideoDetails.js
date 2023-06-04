import Hero from "../../components/Hero/Hero.js";
import Comments from "../../components/Comments/Comments.js";
import NextVideo from "../../components/NextVideos/NextVideo";
import { useParams } from "react-router-dom";
import useThisVideo from "../../components/ApiFunctions/MainVideo";
import useAllVideos from "../../components/ApiFunctions/VideoList";

function VideoDetails() {
  let { id } = useParams();

  const allVideos = useAllVideos();

  const thisVideoId = id || allVideos[0]?.id;

  const thisVideo = useThisVideo(thisVideoId);

  const allOtherVideos = allVideos.filter((obj) => obj.id !== thisVideoId);

  if (thisVideo == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Hero videoDetails={thisVideo} />
      <Comments comments={thisVideo.comments} />
      <NextVideo videos={allOtherVideos} />
    </div>
  );
}

export default VideoDetails;
