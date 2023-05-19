import {useState} from 'react';
import '../styles/comments.scss';








function Comments({comments}) {



    return (
        <section className="comments">
            <h2 className="comments__count">{comments.length} Comments</h2>
            <div className="comments__form">
                <img className="comments__form-image" src="/assets/images/Mohan-muruge.jpg" alt="User avatar" />
                <form className="comments__form-inputs">
                    <label className="comments__form-inputs-label" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <textarea className="comments__form-inputs-textarea" name="comment" id="comment" cols="30" rows="10" placeholder="Write comment here"></textarea>
                    <button className="comments__form-inputs-button" type="submit">COMMENT</button>
                </form>
            </div>
            <div className="comments__list">
                {comments.map(obj => {  
                    const {id, name, timestamp, comment} = obj;
                    let date = new Date(timestamp);
                    let mmDdYyyy = date.toLocaleDateString();
                    
                    return (
                        <div className="comments__list-comment" key={id}>
                            <img className="comments__list-comment-image" src="/assets/images/Mohan-muruge.jpg" alt="User avatar" />
                            <div className="comments__list-comment-details">
                                <div className="comments__list-comment-details-top">
                                    <h3 className="comments__list-comment-details-top-name">{name}</h3>
                                    <h4 className="comments__list-comment-details-top-date">{mmDdYyyy}</h4>
                                </div>
                                <p className="comments__list-comment-details-comment">{comment}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>

    )
}








export default Comments;

    