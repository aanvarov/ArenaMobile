import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';

const ProfileScreen = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F94%2Fbe%2Fc2%2F94bec20fb5503f92e6467c57195f5357.jpg&f=1&nofb=1',
        }}>
        <View>
          <Text>Orderssss</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
