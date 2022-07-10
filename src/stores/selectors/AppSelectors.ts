import {createSelector} from 'reselect';

const getApp = (state: any) => state.app;

export function createAppConfigSelector() {
  return createSelector([getApp], state => state.appConfig);
}
