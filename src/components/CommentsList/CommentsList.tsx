import { TComment } from "../../types/comment";
import Comment from "../Comment/Comment";

interface CommentsListProps {
  comments: TComment[];
}

function CommentsList({comments}: CommentsListProps) {
  return (
    <>
      <h3 className="film-details__comments-title">
        Comments <span className="film-details__comments-count">{comments.length}</span>
      </h3>
      <ul className="film-details__comments-list">
        {comments && 
          comments.map((comment) => (
            <li className="film-details__comment" key={comment.id}>
              <Comment {...comment} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CommentsList;
