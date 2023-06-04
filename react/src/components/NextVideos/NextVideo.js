import { Link } from "react-router-dom";
import "./NextVideo.scss";

const NextVideo = ({ videos }) => {
  return (
    <aside className="next-video">
      <h3 className="next-video__header">NEXT VIDEOS</h3>
      <article className="next-video__list">
        {videos.map((obj) => {
          const { id, title, channel, image } = obj;
          return (
            <Link to={`/video/${id}`} className="next-video__video" key={id}>
              <div className="next-video__img-container">
                <img
                  className="next-video__img"
                  key={id}
                  src={image}
                  alt="video thumbnail"
                />
              </div>
              <div className="next-video__details">
                <h4 className="next-video__title">{title}</h4>
                <p className="next-video__channel">{channel}</p>
              </div>
            </Link>
          );
        })}
      </article>
    </aside>
  );
};

export default NextVideo;
