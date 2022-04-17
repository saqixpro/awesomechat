import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import screens from '../constants/screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.splash} component={SplashScreen} />
      <Stack.Screen name={screens.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};