import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFilmReviewsAction, fetchSimilarFilmsAction, fetchFilmsAction, publishFilmReviewAction, fetchFilmAction, fetchPromoFilmAction, fetchFavoriteFilmsAction } from '../api-actions';

const initialState: FilmsData = {
  films: [],
  film: null,
  promoFilm: null,
  similarFilms: [],
  favoriteFilms: [],
  filmReviews: [],
  isLoading: false,
  reviewsPublishStatus: RequestStatus.Idle,
};

export const filmsData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.films = [];
        state.isLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
      })
      .addCase(publishFilmReviewAction.pending, (state) => {
        state.reviewsPublishStatus = RequestStatus.Pending;
      })
      .addCase(publishFilmReviewAction.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
        state.reviewsPublishStatus = RequestStatus.Fulfilled;
      })
      .addCase(publishFilmReviewAction.rejected, (state) => {
        state.reviewsPublishStatus = RequestStatus.Rejected;
      });
  }
});
