import * as React from 'react';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './stores';

import RootNavigations from './navigators/RootNavigations';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};
const App = () => {
  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NativeBaseProvider>
            <RootNavigations />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default CodePush(codePushOptions)(App);
