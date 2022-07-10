import {createReducer} from '@reduxjs/toolkit';

import {LoadingActionType} from '../actionTypes';
const initialState: {[key: string]: any} = {loading: false, opacity: 0.6};

export default createReducer(initialState, builder =>
  builder
    .addCase(LoadingActionType.start, (state, action: {[key: string]: any}) => {
      const {opacity} = action?.payload || {};
      return {
        loading: true,
        opacity: opacity || 0.6,
      };
    })
    .addCase(LoadingActionType.stop, (state, action: {[key: string]: any}) => {
      const {opacity} = action?.payload || {};
      return {
        loading: false,
        opacity: opacity || 0.6,
      };
    })
    .addCase(LoadingActionType.clear, () => ({
      loading: false,
      opacity: 0.6,
    })),
);
