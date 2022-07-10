import {createReducer} from '@reduxjs/toolkit';
import {AppActionType} from '../actionTypes';
const initialState: {[key: string]: any} = {
  appConfig: {},
};

export default createReducer(initialState, builder =>
  builder.addCase(
    AppActionType.setAppConfig,
    (state, action: {[key: string]: any}) => {
      state.appConfig = action.payload;
    },
  ),
);
