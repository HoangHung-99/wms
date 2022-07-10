import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import navService from '../services/navigation/nav.service';
import AppContainer from '../screens/AppContainer';

const RootNavigations = () => {
  return (
    <NavigationContainer ref={navService.navigationRef}>
      <AppContainer />
    </NavigationContainer>
  );
};

export default RootNavigations;
