export const getTextByRating = (rating: number): string => {
  switch (true) {
    case rating >= 0 && rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    case rating === 10:
      return 'Awesome';
    default:
      return '';
  }
};

const addZero = (number: number): string | number => number < 10 ? `0${number}` : number;

export const getFormatTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - (hours * 3600)) / 60);
  const seconds = time - (hours * 3600) - (minutes * 60);

  return `${hours > 0 ? `${addZero(hours)}:` : ''}${addZero(minutes)}:${addZero(seconds)}`;
};
