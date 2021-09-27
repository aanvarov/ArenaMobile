import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import LoadsScreen from '../screens/LoadsScreen';
import HomeScreen from '../screens/HomeScreen';
import TipsScreen from '../screens/TipsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const DrawerRouter = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'loads', title: 'Loads', icon: 'transit-connection-variant'},
    {key: 'tips', title: 'Tips', icon: 'gift'},
    {key: 'profile', title: 'Profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: props => <HomeScreen {...props} navigation={navigation} />,
    loads: props => <LoadsScreen {...props} navigation={navigation} />,
    tips: props => <TipsScreen {...props} navigation={navigation} />,
    profile: props => <ProfileScreen {...props} navigation={navigation} />,
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
