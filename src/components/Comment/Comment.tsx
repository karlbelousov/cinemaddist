import { TComment } from "../../types/comment";

function Comment({ emotion, comment, author, date }: TComment) {
  return (
    <>
      <span className="film-details__comment-emoji">
        <img
          src={`./images/emoji/${emotion}.png`}
          width={55}
          height={55}
          alt={`emoji-${emotion}`}
        />
      </span>
      <div>
        <p className="film-details__comment-text">
          {comment}
        </p>
        <p className="film-details__comment-info">
          <span className="film-details__comment-author">{author}</span>
          <span className="film-details__comment-day">{date}</span>
          <button className="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </>
  );
}

export default Comment;
