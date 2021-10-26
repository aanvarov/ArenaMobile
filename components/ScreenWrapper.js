import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const ScreenWrapper = props => {
  return (
    <ImageBackground
      style={
        props.fullHeight
          ? {flex: 1}
          : {height: Dimensions.get('screen').height - 100}
      }
      resizeMode="cover"
      source={props.imgSource}>
      <SafeAreaView style={{minHeight: 700, flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: 16}}>{props.children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ScreenWrapper;
