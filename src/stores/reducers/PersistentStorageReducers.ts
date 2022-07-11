import {createReducer} from '@reduxjs/toolkit';
// import {DefaultLanguage} from '../../common/constants';

import {PersistentStorageActionType} from '../actionTypes';

const initialState = {
  token: '',
  status: false,
  isLoadingStart: true,
  language: null,
  currentLang: '',
  refreshToken: '',
};

export default createReducer(initialState, builder =>
  builder
    .addCase(
      PersistentStorageActionType.setToken,
      (state: {[key: string]: any}, action: {[key: string]: any}) => {
        state.token = action.payload;
      },
    )
    .addCase(
      PersistentStorageActionType.setRefreshToken,
      (state: {[key: string]: any}, action: {[key: string]: any}) => {
        state.refreshToken = action.payload;
      },
    )
    .addCase(
      PersistentStorageActionType.setLanguage,
      (state: {[key: string]: any}, action: {[key: string]: any}) => {
        state.language = action.payload;
      },
    )
    .addCase(
      PersistentStorageActionType.setCurrentLanguage,
      (state: {[key: string]: any}, action: {[key: string]: any}) => {
        state.currentLang = action.payload;
      },
    )
    .addCase(
      PersistentStorageActionType.setAuthen,
      (state: {[key: string]: any}, action: {[key: string]: any}) => {
        state.token = action?.payload?.token;
        state.status = action?.payload?.status;
        state.isLoadingStart = false;
      },
    ),
);
