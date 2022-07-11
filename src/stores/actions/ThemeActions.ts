import {BaseAction} from './actions.model';
import {LoadingActionType} from '../actionTypes';

const start = (payload?: any): BaseAction => ({
  type: LoadingActionType.start,
  payload,
});

const stop = (payload?: any): BaseAction => ({
  type: LoadingActionType.stop,
  payload,
});

const clear = (payload: any): BaseAction => ({
  type: LoadingActionType.clear,
  payload,
});

export default {
  start,
  stop,
  clear,
};
