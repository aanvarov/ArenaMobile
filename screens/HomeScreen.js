import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Axios from '../utils/axios';
import {useDispatch} from 'react-redux';
import {getDayNotClosed} from '../store/Day/actions';

const HomeScreen = ({navigation}) => {
  const startDay = () => {
    Axios.post('/day')
      .then(({data}) => {
        console.log('-1-2-3-4-5-', data);
        dispatch(getDayNotClosed(data));
      })
      .catch(err => console.log(err));
  };
  const dispatch = useDispatch();
  const findNotClosed = () => {
    Axios.get('/day/findNotClosed')
      .then(({data}) => {
        console.log('-0-0-0-0-0-', data);
        if (data.length > 0) {
          dispatch(getDayNotClosed(data));
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.wallpapersafari.com%2Fphone%2F640%2F1136%2F78%2F73%2Fsbk2tB.jpg&f=1&nofb=1',
        }}>
        <View style={styles.container}>
          <Text>blaaaa</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
