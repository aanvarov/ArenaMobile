import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Axios from '../utils/axios';
import {useDispatch} from 'react-redux';
import {getDayNotClosed} from '../store/Day/actions';
import MyBalance from '../components/home/MyBalance';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  const homeBg = require('../assets/images/homeBg.jpeg');
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
    <ScreenWrapper imgSource={homeBg}>
      <Header title="Home" />
      <ScrollView>
        <MyBalance />
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startBtnText}>Start Your Day</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  startBtn: {
    width: '100%',
    backgroundColor: '#12B0F899',
    alignItems: 'center',
    borderRadius: 14,
    marginTop: 25,
  },
  startBtnText: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 18,
    color: 'white',
  },
});

export default HomeScreen;
