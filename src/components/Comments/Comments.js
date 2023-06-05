import axios from "axios";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentList";
import avatar from "../../assets/images/mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import "./Comments.scss";

function Comments({ comments }) {
  const { id } = useParams();

  const uploadComments = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    axios
      .post(`http://localhost:8080/videos/${id}/comments`, {
        comment: comment,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSubmit(e) {
    uploadComments(e);
    setTimeout(function () {
      window.location.reload();
    }, 1500);
  }

  return (
    <section className="comments">
      <h2 className="comments__count">{comments.length} Comments</h2>
      <div className="comments__form">
        <div className="comments__form-avatar-container">
          <img
            className="comments__form-avatar"
            src={avatar}
            alt="User avatar"
          />
        </div>
        <form className="comments__input" onSubmit={handleSubmit}>
          <label className="comments__input-label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__input-text"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Add a new comment"
          ></textarea>
          <img
            className="comments__input-icon"
            src={commentIcon}
            alt="commet icon"
          ></img>
          <button className="comments__input-button" type="submit">
            COMMENT
          </button>
        </form>
      </div>
      <CommentsList comments={comments} />
    </section>
  );
}

export default Comments;
