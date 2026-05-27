import { FormEvent, useState } from "react";
import { emotions } from "../../const";
import { Emotion } from "../../types/comment";
import { useAddCommentMutation } from "../../services/appApi";
import { getSelectedFilmId } from "../../store/appReducer";
import { useAppSelector } from "../../store";

function CommentForm() {
  const selectedFilmId = useAppSelector(getSelectedFilmId);
  const [emoji, setEmoji] = useState<Emotion>("smile");
  const [comment, setComment] = useState<string>('');

  const [addComment, { isLoading }] = useAddCommentMutation();


  const handleChangeEmoji = (emotion: Emotion) => {
    setEmoji(emotion);
  };

  const handleCommentInput = (event: any) => {
    setComment(event.target.value);
  }

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await addComment({
      filmId: selectedFilmId,
      comment: {
        emotion: emoji,
        comment
      }
    })

    setComment('');
    setEmoji('smile');
  }

  return (
    <form className="film-details__new-comment" onSubmit={handleSubmitForm}>
      <div className="film-details__add-emoji-label">
        {emoji && (
          <img
            src={`./images/emoji/${emoji}.png`}
            width={55}
            height={55}
            alt="emoji"
          />
        )}
      </div>
      <label className="film-details__comment-label">
        <textarea
          className="film-details__comment-input"
          placeholder="Select reaction below and write comment here"
          name="comment"
          value={comment}
          onInput={handleCommentInput}
        />
      </label>
      <div className="film-details__emoji-list">
        {emotions.map((emotion) => (
          <>
            <input
              className="film-details__emoji-item visually-hidden"
              name="comment-emoji"
              type="radio"
              id={`emoji-${emotion}`}
              value={emoji}
              onChange={() => handleChangeEmoji(emotion)}
            />
            <label
              className="film-details__emoji-label"
              htmlFor={`emoji-${emotion}`}
            >
              <img
                src={`./images/emoji/${emotion}.png`}
                width={30}
                height={30}
                alt="emoji"
              />
            </label>
          </>
        ))}
      </div>
      <button className="film-details__submit-button" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}

export default CommentForm;
