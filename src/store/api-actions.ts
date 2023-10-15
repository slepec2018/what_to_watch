import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { redirectToRoute } from './actions';
import { APIRoute, AppRoute } from '../const';
import { Film, Films } from '../types/films';
import { AuthData, FavoriteFilmData, ReviewData, UserData } from '../types/data';
import { dropToken, saveToken } from '../services/token';
import { Reviews } from '../types/reviews.js';

function createAsyncThunkTeamplate<Returned = void, ThunkArg = undefined>() {
  return createAsyncThunk<Returned, ThunkArg, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>;
}

export const fetchFilmsAction = createAsyncThunkTeamplate<Films>()(
  'data/loadFilms',
  async (_, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);

    return data;
  },
);

export const fetchFilmAction = createAsyncThunkTeamplate<Film, number>()(
  'data/loadFilm',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Film.replace('{filmId}', filmId.toString()));

    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunkTeamplate<Film>()(
  'data/loadPromoFilm',
  async (_, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);

    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunkTeamplate<Films, number>()(
  'data/loadSimilarFilms',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.SimilarFilm.replace('{filmId}', filmId.toString()));

    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunkTeamplate<Films>()(
  'data/loadFavoriteFilms',
  async (_, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);

    return data;
  },
);

export const changeFavoriteFilmStatusAction = createAsyncThunkTeamplate<Film, FavoriteFilmData>()(
  'data/changeFavoriteFilmStatus',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(
      APIRoute.FavoriteStatus
        .replace('{filmId}', filmId.toString())
        .replace('{status}', status.toString())
    );
    dispatch(fetchFavoriteFilmsAction());

    return data;
  },
);

export const fetchFilmReviewsAction = createAsyncThunkTeamplate<Reviews, number>()(
  'data/loadFilmReviews',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Reviews>(APIRoute.Reviews.replace('{filmId}', filmId.toString()));

    return data;
  },
);

export const publishFilmReviewAction = createAsyncThunkTeamplate<Reviews, ReviewData>()(
  'data/publishFilmReview',
  async ({rating, comment, filmId}, {dispatch, extra: api}) => {
    const {data} = await api.post<Reviews>(
      APIRoute.Reviews.replace('{filmId}', filmId.toString()),
      {rating, comment}
    );
    dispatch(redirectToRoute(AppRoute.Film.replace(':id', filmId.toString())));

    return data;
  },
);

export const checkAuthAction = createAsyncThunkTeamplate<UserData>()(
  'user/checkAuth',
  async (_, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunkTeamplate<UserData, AuthData>()(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunkTeamplate()(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.SignIn));
  },
);
