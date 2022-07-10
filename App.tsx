import React from 'react';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/stores';

import RootNavigations from './src/navigators/RootNavigations';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <RootNavigations />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default CodePush(codePushOptions)(App);
