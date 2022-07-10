import {all, fork} from 'redux-saga/effects';
import AppSaga from './AppSagas';

export function* rootSaga() {
  yield all([fork(AppSaga)]);
}
