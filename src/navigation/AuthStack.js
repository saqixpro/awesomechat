import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import screens from '../constants/screens';
import SignUpScreens from '../screens/Register';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.splash} component={SplashScreen} />
      <Stack.Screen name={screens.login} component={LoginScreen} />
      <Stack.Group>
        <Stack.Screen name={screens.signup.personalInfo} component={SignUpScreens.PersonalInfo} />
        <Stack.Screen name={screens.signup.profile} component={SignUpScreens.Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};