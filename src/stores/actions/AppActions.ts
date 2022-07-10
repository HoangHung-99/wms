import {AppActionType} from '../actionTypes';
import {BaseAction} from '~/stores/actions/actions.model';
import {UserLogin} from '~/API/Auth/Interface';

const setAppConfig = (payload: any): BaseAction => ({
  type: AppActionType.setAppConfig,
  payload,
});

const setLanguageAsync = (payload: any): BaseAction => ({
  type: AppActionType.setLanguageAsync,
  payload,
});

const setCurrentLanguageAsync = (payload: any): BaseAction => ({
  type: AppActionType.setCurrentLanguageAsync,
  payload,
});

const loginSync = (payload: UserLogin.LoginRequest): BaseAction => {
  return {
    type: AppActionType.loginAsync,
    payload,
  };
};

const logoutAsync = (): BaseAction => ({
  type: AppActionType.logoutAsync,
});

export default {
  setAppConfig,
  setLanguageAsync,
  setCurrentLanguageAsync,
  loginSync,
  logoutAsync,
};
