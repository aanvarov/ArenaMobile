import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Alert, StyleSheet, Image, Animated} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import BigButton from '../components/playstation/BigButton';
import PlaystationBoard from '../components/playstation/PlaystationBoard';
import {useSelector} from 'react-redux';

import Axios from '../utils/axios';
import {useDispatch} from 'react-redux';
import Header from '../components/Header';

const PlaystationScreen = ({navigation}) => {
  const playstationBg = require('../assets/images/playstationBg.jpeg');
  const [playstations, setPlaystations] = useState([]);
  const [playstation, setPlaystation] = useState(null);
  const currentDay = useSelector(state => state.day);

  const [loading, setLoading] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, playstation]);

  const fetchAllPlaystations = () => {
    setLoading(true);
    Axios.get('/playstations')
      .then(({data}) => {
        setPlaystations(data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    fetchAllPlaystations();
  }, []);

  const changeStatus = async (_id, isFree) => {
    try {
      if (currentDay?.dayId) {
        const {data} = await Axios.patch(`/playstations/status/${_id}`, {
          isFree,
        });
        Alert.alert(
          'Success',
          'Status has been updated',
          [
            {
              text: 'OK',
              onPress: () => {
                fetchAllPlaystations();
                setPlaystation(data.payload);
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        alertStartDay();
      }
    } catch (error) {
      console.log(error);
      // setStatusLoading(false);
    }
  };

  const alertStartDay = () => {
    Alert.alert(
      'Start Day',
      'First you have to start your working day',
      [
        {
          text: 'OK',
          onPress: () => {
            return navigation.navigate('home');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScreenWrapper imgSource={playstationBg}>
      <Header title="Playstations" />
      <View style={styles.buttonsContainer}>
        {playstations.length > 0 ? (
          playstations.map((item, index) => (
            <BigButton
              key={index}
              item={item}
              activePlaystation={playstation}
              setPlaystation={setPlaystation}
            />
          ))
        ) : (
          <View style={styles.noPlayView}>
            <Text style={styles.noPlayText}>No Playstations</Text>
          </View>
        )}
      </View>
      {playstation ? (
        <Animated.View style={{opacity: fadeAnim, flex: 1}}>
          <PlaystationBoard
            playstation={playstation}
            changeStatus={changeStatus}
          />
        </Animated.View>
      ) : (
        <View style={styles.selectPlaystation}>
          <Text style={styles.selectPlaystationText}>
            Please select a playstation
          </Text>
        </View>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: '#12B0F899',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 14,
  },
  selectPlaystation: {
    marginTop: 15,
    backgroundColor: '#12B0F899',
    borderRadius: 5,
    paddingVertical: 20,
  },
  selectPlaystationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default PlaystationScreen;
