import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import BigButton from '../components/playstation/BigButton';
import PlaystationBoard from '../components/playstation/PlaystationBoard';
import {useSelector} from 'react-redux';

import Axios from '../utils/axios';
import {useDispatch} from 'react-redux';
import {setPlaystation} from '../store/Playstation/actions';
import Header from '../components/Header';

const PlaystationScreen = ({navigation}) => {
  const playstationBg = require('../assets/images/playstationBg.jpeg');
  const [playstations, setPlaystations] = useState([]);
  const currentDay = useSelector(state => state.day);

  const dispatch = useDispatch();
  // const [play, setPlay] = useState(prev.data);
  const [playId, setPlayId] = useState('');
  const [loading, setLoading] = useState(true);

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

  // const fetchById = id => {
  //   if (id) {
  //     Axios.get(`/playstations/${id}`)
  //       .then(({data}) => {
  //         setPlay(data);
  //         dispatch(setPlaystation(data));
  //       })
  //       .catch(err => console.log(err));
  //   } else {
  //     console.log('not id for fetchById');
  //   }
  // };

  // const getOnePlaystation = () => {
  //   fetchById(playId);
  // };

  // useEffect(() => {
  //   getOnePlaystation();
  // }, [getOnePlaystation, playId]);

  // const changeStatus = async (id, status) => {
  //   try {
  //     const {data} = await Axios.patch(`/playstations/status/${id}`, {
  //       status,
  //     });
  //     Alert.alert(
  //       'Success',
  //       'Status has been updated',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => {
  //             //   if (data.status === STATUS_STEPS['6'].status) {
  //             //     return props.navigation.navigate('Uploads', { _id: load._id, contract: load.contract });
  //             //     }
  //             fetchAllPlaystations();
  //             getOnePlaystation();
  //           },
  //         },
  //       ],
  //       {cancelable: false},
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     // setStatusLoading(false);
  //   }
  // };
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
      <Header title="Playstation" />
      <View style={styles.buttonsContainer}>
        {playstations.length > 0 ? (
          playstations.map((item, index) => (
            <BigButton key={item.id} playstation={item} />
          ))
        ) : (
          <View style={styles.noPlayView}>
            <Text style={styles.noPlayText}>No Playstations</Text>
          </View>
        )}
      </View>
      <View>
        <Text style={{color: 'white'}}>no plays</Text>
        {/* <PlaystationBoard play={play} changeStatus={changeStatus} /> */}
      </View>
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
  noPlayView: {
    backgroundColor: '#000000',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 2,
    padding: 8,
  },
  noPlayText: {
    color: 'lime',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
});

export default PlaystationScreen;
