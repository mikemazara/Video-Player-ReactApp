
import './comments.scss';
import avatar from '../assets/images/mohan-muruge.jpg'





// make function to apply to comment button to add comment to comments array

    
function CommentItem({comment: {id, name, timestamp, comment}}){
    let date = new Date(timestamp);
    let mmDdYyyy = date.toLocaleDateString();
    
    return (
        <div className="comments__list-comment" key={id}>
            <img className="comments__list-comment-image" src='#' alt="User avatar" />
            <div className="comments__list-comment-details">
                <div className="comments__list-comment-details-top">
                    <h3 className="comments__list-comment-details-top-name">{name}</h3>
                    <h4 className="comments__list-comment-details-top-date">{mmDdYyyy}</h4>
                </div>
                <p className="comments__list-comment-details-comment">{comment}</p>
            </div>
        </div>
    )

}

function CommentsList({comments}){
    return (
    <div className="comments__list">
    {comments.map(comment => <CommentItem key={comment.id} comment={comment}/>)}
</div>)

}
function CommentsContainner({comments}) {



    return (
        <section className="comments">
            <h2 className="comments__count">{comments.length} Comments</h2>
            <div className="comments__form">
                <div className='comments__avatar-container'>
                    <img className="comments__avatar" src={avatar} alt="User avatar" />
                </div>
                <form className="comments__form-inputs">
                    <label className="comments__form-inputs-label" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <textarea className="comments__form-inputs-textarea" name="comment" id="comment" cols="30" rows="10" placeholder="Write comment here"></textarea>
                    <button className="comments__form-inputs-button" type="submit" >COMMENT</button>
                </form>
            </div>
            <CommentsList comments={comments}/>
        </section>

    )
}








export default CommentsContainner;

    