import { useDeleteCommentMutation } from "../../services/appApi";
import { TComment } from "../../types/comment";
import humanizeDate from "../../utils/humanizeDate";

function Comment({ id, emotion, comment, author, date }: TComment) {
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();

  const handleDeleteCommentButtonClick = async () => {
    await deleteComment(id);
  };

  return (
    <li className="film-details__comment">
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
          <span className="film-details__comment-day">{humanizeDate(date)}</span>
          <button 
            className="film-details__comment-delete"
            onClick={handleDeleteCommentButtonClick}
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </p>
      </div>
    </li>
  );
}

export default Comment;
