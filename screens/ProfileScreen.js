import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';

const ProfileScreen = ({navigation}) => {
  const profileBg = require('../assets/images/profileBg.jpg');
  return (
    <ScreenWrapper imgSource={profileBg}>
      <Header title="Settings" />
      <View>
        <Text>Profile</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;
