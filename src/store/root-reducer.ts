import { combineReducers } from '@reduxjs/toolkit';
import { filmsProcess } from './films-process/films-process';
import { filmsData } from './films-data/films-data';
import { userProcess } from './user-process/user-process';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
