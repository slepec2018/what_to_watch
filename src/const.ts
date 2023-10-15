export const CARD_DISPLAY_COUNT = 8;
export const GENRE_DISPLAY_COUNT = 9;
export const RELATED_DISPLAY_COUNT = 4;
export const RATING_INPUT_COUNT = 10;
export const ALL_GENRES = 'All genres';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/{filmId}',
  SimilarFilm = '/films/{filmId}/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/{filmId}/{status}',
  Reviews = '/comments/{filmId}',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Films = 'FILMS',
  Data = 'DATA',
  User = 'USER',
}

export enum RequestStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export enum CommentLength {
  Min = 50,
  Max = 400,
}
