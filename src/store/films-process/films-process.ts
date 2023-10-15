import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmsProcess } from '../../types/state';
import { ALL_GENRES, NameSpace } from '../../const';

const initialState: FilmsProcess = {
  genre: ALL_GENRES,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { changeGenre } = filmsProcess.actions;
