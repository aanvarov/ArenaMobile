import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerRouter from './DrawerRouter';
import LoadsScreen from '../screens/LoadsScreen';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerRouter}
          options={{title: 'Arena PlayStation', headerLeft: null}}
        />
        <Stack.Screen
          name="Loads"
          component={LoadsScreen}
          options={{title: 'All loads'}}
        />
        {/* <Stack.Screen
          name="LoadDetails"
          component={LoadDetailsScreen}
          options={{ title: t("Load details") }}
        />
        <Stack.Screen
          name="SelectDispatcherToTip"
          component={SelectDispatcherToTip}
          options={{ title: t("Loads list") }}
        />
        <Stack.Screen
          name="FileUpload"
          component={FileUpload}
          options={{ title: t("Upload file") }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
