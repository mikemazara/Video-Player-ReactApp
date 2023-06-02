import "./NextVideo.scss";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import useThisVideo from "../ApiFunctions/MainVideo";
import useAllOtherVideos from "../ApiFunctions/VideoList";

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
                <img className="next-video__img" key={id} src={image} />
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

{
  /* // return (
  //   <aside className="next-video">
  //     <h3 className="next-video__header">NEXT VIDEOS</h3>
  //     <article className="next-video__list">
  //       {videos.map((obj) => {
  //         const { id, title, channel, image } = obj;
  //         return (
  //           <div
  //             className="next-video__video"
  //             key={id}
  //             onClick={() => setThisVideoId(id)}
  //           >
  //             <div className="next-video__img-container">
  //               <img
  //                 className="next-video__img"
  //                 src={image}
  //                 alt="Thumbnail of next video"
  //               />
  //             </div>
  //             <div className="next-video__details">
  //               <h4 className="next-video__title">{title}</h4>
  //               <p className="next-video__channel">{channel}</p>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </article>
  //   </aside>
  // ); */
}

export default NextVideo;
