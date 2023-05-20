import './next-video.scss'


const NextVideo = ({ videos, setThisVideoId }) => {
    return (
        <section className="next-video">
            <h3 className="next-video__title">NEXT VIDEO</h3>
            <div className="next-video__videos">
                {videos.map(obj => {
                    const { id, title, channel, image } = obj;
                    return (
                        <div className="next-video__videos-video" key={id} onClick={() => setThisVideoId(id)}>
                            <img className="next-video__videos-img" src={image} alt="Thumbnail of next video" />
                            <div className="next-video__videos-details">
                                <h4 className="next-video__videos-details-title">{title}</h4>
                                <h5 className="next-video__videos-details-channel">{channel}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default NextVideo;