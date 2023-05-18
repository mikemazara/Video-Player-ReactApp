import '../styles/hero.scss'



const Hero = ({ videos }) => {
    let video = videos[0];
    const date = new Date(video.timestamp);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="hero">
            <div className="hero__video">
                <video className="hero__video-player" poster={video.image} controls>
                    <source src={video.video} type="video/mp4" />
                </video>
            </div>
            <div className="hero__info">
                <div className="hero__info-top">
                    <h1 className="hero__info-title">{video.title}</h1>
                    <div className="hero__info-views">
                        <p>{video.views}</p>
                        <img className="hero__info-views-image" src="./assets/icons/SVG/Icon-views.svg" alt="views icon" />
                    </div>
                    <div className="hero__info-like">
                        <p>{video.likes}</p>
                        <img className="hero__info-like-image" src="./assets/icons/SVG/Icon-likes.svg" alt="likes icon" />
                    </div>
                </div>
                <div className="hero__info-channel">
                    <h2 className="hero__info-channel-name">{video.channel}</h2>
                    <p className="hero__info-channel-date">{formattedDate}</p>
                </div>
                <div className="hero__info-description">
                    <p className="hero__info-description-text">{video.description}</p>
                </div>
            </div>
        </div>
    )

}

export default Hero;

