import React from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';

const OrderScreen = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8f%2Fba%2Fcb%2F8fbacbd464e996966eb9d4a6b7a9c21e--sultan.jpg%3Fb%3Dt&f=1&nofb=1',
        }}>
        <View>
          <Text>Orderssss</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OrderScreen;
