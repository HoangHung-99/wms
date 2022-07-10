import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRouters from './app.routers';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="test"
      screenOptions={{presentation: 'card', headerShown: false}}>
      {Object.keys(appRouters).map((screenName: any) => {
        const screenChild = appRouters[screenName];
        const {options = {}, component = undefined} = screenChild;
        if (component) {
          return (
            <Stack.Screen
              options={{...options}}
              key={screenName}
              name={screenName}
              component={component}
            />
          );
        }
        return (
          <Stack.Screen
            options={{...options}}
            key={screenName}
            name={screenName}
            component={screenChild}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppStack;
