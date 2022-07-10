import {PersistentStorageActionType} from '../actionTypes';
import {BaseAction} from './actions.model';

const setToken = (accessToken?: string): BaseAction => {
  return {
    type: PersistentStorageActionType.setToken,
    payload: accessToken,
  };
};

const setLanguage = (payload: any): BaseAction => ({
  type: PersistentStorageActionType.setLanguage,
  payload,
});

const setCurrentLanguage = (payload: any): BaseAction => ({
  type: PersistentStorageActionType.setCurrentLanguage,
  payload,
});

const setAuthen = (payload?: {status: boolean; token: string}): BaseAction => {
  return {
    type: PersistentStorageActionType.setAuthen,
    payload: payload,
  };
};

export default {
  setToken,
  setLanguage,
  setCurrentLanguage,
  setAuthen,
};
