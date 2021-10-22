import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Auth/LoginScreen';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="BottomTabNav"
      screenOptions={screenOptions}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);
