import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Axios from '../utils/axios';
import {useDispatch} from 'react-redux';
import {getStartedDay, clearDay} from '../store/Day/actions';
import MyBalance from '../components/home/MyBalance';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import {useToast} from 'native-base';

const HomeScreen = ({navigation}) => {
  const homeBg = require('../assets/images/homeBg.jpeg');
  const dispatch = useDispatch();
  const currentDay = useSelector(state => state.day);
  const user = useSelector(state => state.auth);
  const toast = useToast();
  // starting new day
  const startDay = () => {
    Axios.post('/days', {
      club: user.user.role === 'club' ? user.user._id : user.user.club,
    })
      .then(({data}) => {
        dispatch(getStartedDay(data));
        toast.show({
          description: 'Day started',
          placement: 'top',
        });
      })
      .catch(err => console.log(err));
  };
  // finish current day
  const stopDay = () => {
    try {
      Alert.alert(
        'Stop Current Day',
        'Are you sure to finish current day',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              Axios.patch(`/days/closeDay/${currentDay.dayId}`, {
                startedAt: currentDay.day.startedAt,
              })
                .then(({data}) => {
                  console.log('closedDay', data);
                  toast.show({
                    description: 'Day stopped',
                    placement: 'top',
                  });
                })
                .catch(err => console.log(err));
              console.log('cleared');
              dispatch(clearDay());
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDay = () => {
    if (currentDay.dayId) {
      stopDay();
    } else {
      startDay();
    }
  };

  return (
    <ScreenWrapper imgSource={homeBg}>
      <Header title="Home" />
      <ScrollView>
        <MyBalance />
        <TouchableOpacity style={styles.startBtn} onPress={handleDay}>
          <Text
            style={[
              styles.startBtnText,
              currentDay.dayId ? {color: 'lime'} : null,
            ]}>
            {currentDay.dayId ? 'Stop Your Day' : 'Start Your Day'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  startBtn: {
    width: '100%',
    backgroundColor: '#12B0Ff99',
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
