import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PlaystationScreen from '../screens/PlaystationScreen';
import OrderScreen from '../screens/OrderScreen';
import BarScreen from '../screens/BarScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: '#6e6e6e',
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: [
    {
      borderTopWidth: 1,
      borderTopColor: 'yellow',
      elevation: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 999,
      backgroundColor: '#2d2d2d',
      height: 100,
    },
    null,
  ],
};

const BottomTabNav = ({route}) => {
  console.log('routeName', route?.params?.routeName);
  return (
    <Tab.Navigator
      initialRouteName={
        route?.params?.routeName ? route?.params?.routeName : 'home'
      }
      screenOptions={screenOptions}>
      <Tab.Screen
        component={HomeScreen}
        name="home"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.button : null}>
              <Image
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-home-4341294_120570.png',
                }}
                style={[styles.icon, focused ? {opacity: 1} : null]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={PlaystationScreen}
        name="playstationScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.button : null}>
              <Image
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-computer-4341285_120548.png',
                }}
                style={[styles.icon, focused ? {opacity: 1} : null]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={OrderScreen}
        name="orderScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.button : null}>
              <Image
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-gamepad-4341293_120527.png',
                }}
                style={[styles.icon, focused ? {opacity: 1} : null]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={BarScreen}
        name="barScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.button : null}>
              <Image
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-basket-4341280_120547.png',
                }}
                style={[styles.icon, focused ? {opacity: 1} : null]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="profileScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.button : null}>
              <Image
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-settings-4341324_120534.png',
                }}
                style={[styles.icon, focused ? {opacity: 1} : null]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    opacity: 0.5,
    marginBottom: 5,
  },
  button: {
    borderBottomWidth: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomColor: 'yellowgreen',
  },
});

export default BottomTabNav;
