import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '~/screens/auth/LoginScreen';

const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
export default AuthStackNavigator;
