import likeIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./Hero.scss";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const mmDdYyyy = date.toLocaleDateString();
  return mmDdYyyy;
};

const Hero = ({ videoDetails }) => {
  const { title, channel, image, description, views, likes, timestamp } =
    videoDetails;

  return (
    <section className="hero">
      <div className="hero__video">
        <video className="hero__video-player" poster={image} controls>
          <source
            className="hero__video-image"
            src={videoDetails.video}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero__details">
        <h1 className="hero__details-title">{title}</h1>
        <div className="hero__details-info">
          <div className="hero__details-channel">
            <h2 className="hero__details-name">By {channel}</h2>
            <p className="hero__details-date">{formatDate(timestamp)}</p>
          </div>
          <div className="hero__details-numbers">
            <div className="hero__details-stats">
              <img
                className="hero__details-icon"
                src={viewsIcon}
                alt="views icon"
              />
              <p className="hero__details-views">{views}</p>
            </div>
            <div className="hero__details-stats">
              <img
                className="hero__details-icon"
                src={likeIcon}
                alt="likes icon"
              />
              <p className="hero__details-likes">{likes}</p>
            </div>
          </div>
        </div>
        <p className="hero__details-description">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
