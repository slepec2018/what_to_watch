export type UserData = {
  id: number;
  email: string;
  token: string;
  avatarUrl: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type ReviewData = {
  rating: number;
  comment: string;
  filmId: number;
}

export type FavoriteFilmData = {
  filmId: number;
  status: number;
}
