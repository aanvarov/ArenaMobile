import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Profile',
    });
  }, []);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
