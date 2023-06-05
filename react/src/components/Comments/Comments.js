import CommentsList from "./CommentList";
import avatar from "../../assets/images/mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import "./Comments.scss";

function Comments({ comments }) {
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
        <form className="comments__input" onClick={(e) => e.preventDefault()}>
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
