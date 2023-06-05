import React from "react";
import CommentItem from "./CommentItem";

function CommentsList({ comments }) {
  return (
    <div className="comments__list">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;
