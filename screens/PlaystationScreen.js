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
  const currentDay = useSelector(state => state.day);

  const dispatch = useDispatch();
  const [playData, setPlayData] = useState([]);
  // const [play, setPlay] = useState(prev.data);
  const [playId, setPlayId] = useState('');
  const [loading, setLoading] = useState(true);

  // console.log('prevData==', prevPlay.data, '==prevData');

  // const fetchAllPlaystations = () => {
  //   setLoading(true);
  //   Axios.get('/playstations')
  //     .then(({data}) => {
  //       setPlayData(data);
  //     })
  //     .catch(err => console.log(err));
  //   setLoading(false);
  // };
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
  //   fetchAllPlaystations();
  // }, []);

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

  // const alertStartDay = () => {
  //   Alert.alert(
  //     'Start Day',
  //     'First you have to start your working day',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           // return props.navigation.navigate('Home', {});
  //           return props.navigation.reset({
  //             index: 0,
  //             routes: [{name: 'Arena'}],
  //           });
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };

  return (
    <ScreenWrapper imgSource={playstationBg}>
      <Header title="Playstation" />
      <View>
        <Text style={{color: 'white'}}>no plays</Text>
      </View>
    </ScreenWrapper>
  );

  //   if (playData.length > 0) {
  //     if (Object.entries(currentDay.data).length === 0) {
  //       console.log('navigation=>', props.navigation);
  //       alertStartDay();
  //     }
  //     return (
  //       <ScreenWrapper imgSource={playstationBg}>
  //         <View style={styles.buttonsContainer}>
  //           {playData.map((item, index) => (
  //             <BigButton key={index} item={item} setPlayId={setPlayId} />
  //           ))}
  //           <Text style={{color: 'white'}}>asdasd</Text>
  //         </View>
  //         {/* <PlaystationBoard play={play} changeStatus={changeStatus} /> */}
  //       </ScreenWrapper>
  //     );
  //   } else {
  //     return (
  //       <ScreenWrapper imgSource={playstationBg}>
  //         <View>
  //           <Text style={{color: 'white'}}>no plays</Text>
  //         </View>
  //       </ScreenWrapper>
  //     );
  //   }
};

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 34,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default PlaystationScreen;
