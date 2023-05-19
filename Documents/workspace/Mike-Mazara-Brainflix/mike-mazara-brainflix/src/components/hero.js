import '../styles/hero.scss'


const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const mmDdYyyy = date.toLocaleDateString();
    return mmDdYyyy;
}


const Hero = ({ videoDetails:{id, title, channel, image, description, views, likes, duration, video, timestamp, comments} }) => {



    return (
        <section className="hero">
            <div className="hero__video">
                <video className="hero__video-player" poster={image} controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="hero__details">
                <h1 className="hero__details-title">{title}</h1>
                <div className="hero__details-info">
                    <div className="hero__details-info-channel">
                        <h2 className="hero__details-info-channel-name">{channel}</h2>
                        <h3 className="hero__details-info-channel-date">{formatDate(timestamp)}</h3>
                    </div>
                    <div className="hero__details-info-stats">
                        <h3 className="hero__details-info-stats-views">{views}</h3>
                        <h3 className="hero__details-info-stats-likes">{likes}</h3>
                    </div>
                </div>
                <p className="hero__details-description">{description}</p>
            </div>
        </section>


    )
}

export default Hero;

