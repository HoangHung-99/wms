import {call, put, takeLatest, all} from 'redux-saga/effects';

import {LoadingActions, PersistentStorageActions} from '../actions';
import {AppActionType} from '../actionTypes';

import {signIn} from '../../API/Auth/ApiService';
import {UserLogin} from '~/API/Auth/Interface';

// import toastService from '~/services/toast/toast.service';

function* login(action?: {payload: UserLogin.LoginRequest}) {
  try {
    console.log(action);
    yield put(LoadingActions.start());
    const result: {
      status: boolean;
      token: string;
    } = yield call(signIn, action?.payload);
    console.log('result', result);
    const {status, token} = result || {};
    yield put(
      PersistentStorageActions.setAuthen({
        status: status,
        token: token,
      }),
    );

    yield put(LoadingActions.stop());
  } catch (error) {
    console.log(error);

    // toastService.handlerException(error);
    yield put(LoadingActions.stop());
    yield put(
      PersistentStorageActions.setAuthen({
        status: false,
        token: '',
      }),
    );
  }
}

export default function* () {
  yield all([takeLatest(AppActionType.loginAsync, login)]);
}
