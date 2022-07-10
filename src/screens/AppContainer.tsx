import React from 'react';
import {View, Text} from 'react-native';
import {
  createIsLoadingStartSelector,
  createStatusSelector,
} from '../stores/selectors/PersistentStorageSelectors';
import {connectToRedux} from '../@helpers/utils';

import AppStack from '../navigators/AppStack';
import AuthStack from '../navigators/AuthStack';
import SplashScreen from './shared/SplashScreen';
import PersistentStorageActions from '../stores/actions/PersistentStorageActions';
import AppActions from '../stores/actions/AppActions';

interface AppContainer {
  isLoadingStart: boolean;
  status: boolean;
  loginSync: Function;
}

const AppContainer = (props: AppContainer) => {
  const {status} = props;
  console.log(status);

  //   if (isLoadingStart) {
  //     return <SplashScreen />;
  //   }

  if (status) {
    return <AppStack />;
  }

  return <AuthStack />;
};

export default connectToRedux({
  component: AppContainer,
  stateProps: (state: any) => ({
    isLoadingStart: createIsLoadingStartSelector()(state),
    status: createStatusSelector()(state),
  }),
  dispatchProps: () => {
    return {};
  },
});
