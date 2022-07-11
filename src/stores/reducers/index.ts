import {combineReducers} from '@reduxjs/toolkit';
import AppReducer from './AppReducers';
import LoadingReducer from './LoadingReducer';
import PersistentStorageReducer from './PersistentStorageReducers';
import ThemeReducer from './ThemeReducers';

const rootReducer = combineReducers({
  app: AppReducer,
  loading: LoadingReducer,
  theme: ThemeReducer,
  persistentStorage: PersistentStorageReducer,
});

export default rootReducer;
