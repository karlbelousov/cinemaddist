import { useAppDispatch } from "../../store";
import { incrementFilmCountPerStep } from "../../store/appReducer";

function ShowMoreButton() {
  const dispatch = useAppDispatch();
  const handleShowMoreButtonClick = () => {
    dispatch(incrementFilmCountPerStep());
  };

  return (
    <button
      className="films-list__show-more"
      onClick={handleShowMoreButtonClick}
    >
      Show more
    </button>
  );
}

export default ShowMoreButton;
