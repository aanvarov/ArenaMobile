import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import BarScreen from '../screens/BarScreen';
import PlaystationScreen from '../screens/PlaystationScreen';
import HistoryScreen from '../screens/HistoryScreen';
// import {colors} from '../constants';

const DrawerRouter = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Arena', icon: 'home-circle', color: '#2E6DB4'},
    {
      key: 'playstations',
      title: 'Playstations',
      icon: 'controller-classic',
      color: '#77295B',
    },
    {key: 'bar', title: 'Bar', icon: 'food', color: '#14D315'},
    {key: 'history', title: 'Archive', icon: 'history', color: '#AF181A'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: props => (
      <HomeScreen {...props} navigation={navigation} title={routes[index]} />
    ),
    playstations: props => (
      <PlaystationScreen
        {...props}
        navigation={navigation}
        title={routes[index]}
      />
    ),
    bar: props => (
      <BarScreen {...props} navigation={navigation} title={routes[index]} />
    ),
    history: props => (
      <HistoryScreen {...props} navigation={navigation} title={routes[index]} />
    ),
  });

  return (
    <BottomNavigation
      onIndexChange={setIndex}
      renderScene={renderScene}
      safeAreaInsets={{bottom: 20}}
      navigationState={{index, routes}}
    />
  );
};

export default DrawerRouter;
