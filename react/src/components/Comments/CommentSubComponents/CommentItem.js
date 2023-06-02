import React from "react";
import useAllOtherVideos from "../../ApiFunctions/VideoList";
import { Link, useParams } from "react-router-dom";
import useThisVideo from "../../ApiFunctions/MainVideo";

function CommentItem({ comment: { id, name, timestamp, comment } }) {
  let date = new Date(timestamp);
  let mmDdYyyy = date.toLocaleDateString();

  return (
    <div className="comments__comment" key={id}>
      <div className="comments__list-avatar-container">
        <img className="comments__list-avatar" src="#" alt="User avatar" />
      </div>
      <div className="comments__list-comment">
        <div className="comments__top">
          <h3 className="comments__name">{name}</h3>
          <p className="comments__date">{mmDdYyyy}</p>
        </div>
        <p className="comments__paragraph">{comment}</p>
      </div>
    </div>
  );
}

export default CommentItem;
