import { CARD_DISPLAY_COUNT } from '../../const';

type MoreButtonProps = {
  showCount: number;
  setShowCount: (count: number) => void;
}

function MoreButton({showCount, setShowCount}: MoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          setShowCount(showCount + CARD_DISPLAY_COUNT);
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default MoreButton;
