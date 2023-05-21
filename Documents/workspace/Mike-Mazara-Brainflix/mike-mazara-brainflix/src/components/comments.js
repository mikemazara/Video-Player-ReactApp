import "./comments.scss";
import avatar from "../assets/images/mohan-muruge.jpg";
import commentIcon from "../assets/icons/add_comment.svg";

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

function CommentsList({ comments }) {
  return (
    <div className="comments__list">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
function CommentsContainner({ comments }) {
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
        <form className="comments__input">
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
          <img className="comments__input-icon" src={commentIcon}></img>
          <button className="comments__input-button" type="submit">
            COMMENT
          </button>
        </form>
      </div>
      <CommentsList comments={comments} />
    </section>
  );
}

export default CommentsContainner;
