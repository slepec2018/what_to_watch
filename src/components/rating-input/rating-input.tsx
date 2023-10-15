import { ChangeEvent } from 'react';

type RatingInputProps = {
  count: number;
  currRating: number;
  disabled: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingInput({count, currRating, disabled, onChange}: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        onChange={onChange}
        className="rating__input"
        id={`star-${count}`}
        type="radio"
        name="rating"
        value={count}
        checked={count === Number(currRating)}
        disabled={disabled}
      />
      <label className="rating__label" htmlFor={`star-${count}`}>Rating {count}</label>
    </>
  );
}

export default RatingInput;
