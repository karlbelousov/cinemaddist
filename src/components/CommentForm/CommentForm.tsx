function CommentForm() {
  return (
    <form className="film-details__new-comment">
      <div className="film-details__add-emoji-label" />
      <label className="film-details__comment-label">
        <textarea
          className="film-details__comment-input"
          placeholder="Select reaction below and write comment here"
          name="comment"
          defaultValue={""}
        />
      </label>
      <div className="film-details__emoji-list">
        <input
          className="film-details__emoji-item visually-hidden"
          name="comment-emoji"
          type="radio"
          id="emoji-smile"
          defaultValue="smile"
        />
        <label className="film-details__emoji-label" htmlFor="emoji-smile">
          <img
            src="./images/emoji/smile.png"
            width={30}
            height={30}
            alt="emoji"
          />
        </label>
        <input
          className="film-details__emoji-item visually-hidden"
          name="comment-emoji"
          type="radio"
          id="emoji-sleeping"
          defaultValue="sleeping"
        />
        <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
          <img
            src="./images/emoji/sleeping.png"
            width={30}
            height={30}
            alt="emoji"
          />
        </label>
        <input
          className="film-details__emoji-item visually-hidden"
          name="comment-emoji"
          type="radio"
          id="emoji-puke"
          defaultValue="puke"
        />
        <label className="film-details__emoji-label" htmlFor="emoji-puke">
          <img
            src="./images/emoji/puke.png"
            width={30}
            height={30}
            alt="emoji"
          />
        </label>
        <input
          className="film-details__emoji-item visually-hidden"
          name="comment-emoji"
          type="radio"
          id="emoji-angry"
          defaultValue="angry"
        />
        <label className="film-details__emoji-label" htmlFor="emoji-angry">
          <img
            src="./images/emoji/angry.png"
            width={30}
            height={30}
            alt="emoji"
          />
        </label>
      </div>
    </form>
  );
}

export default CommentForm;
