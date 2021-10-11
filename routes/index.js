import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerRouter from './DrawerRouter';
import PlaystationScreen from '../screens/PlaystationScreen';
import BarScreen from '../screens/BarScreen';
import HistoryScreen from '../screens/HistoryScreen';
import OrderScreen from '../screens/OrderScreen';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Arena"
          component={DrawerRouter}
          // options={{title: 'Arena PlayStation', headerLeft: null}}
        />
        <Stack.Screen
          name="Playstations"
          component={PlaystationScreen}
          // options={{title: 'All playstations'}}
        />
        <Stack.Screen
          name="Bar"
          component={BarScreen}
          // options={{title: 'Bar'}}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          // options={{title: 'History'}}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          // options={{title: 'Order'}}
        />
        {/*
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
