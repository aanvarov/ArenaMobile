import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import BigButton from '../components/playstation/BigButton';
import PlaystationBoard from '../components/playstation/PlaystationBoard';
import Axios from '../utils/axios';
import store from '../store';
import {useDispatch} from 'react-redux';
import {setPlaystation} from '../store/Playstation/actions';

const PlaystationScreen = props => {
  const dispatch = useDispatch();
  const currentDay = store.getState().day;
  const prevPlay = store.getState().playstation;
  const [playData, setPlayData] = useState([]);
  const [play, setPlay] = useState(prevPlay.data);
  const [playId, setPlayId] = useState('');
  const [loading, setLoading] = useState(true);

  console.log('prevData==', prevPlay.data, '==prevData');

  const fetchAllPlaystations = () => {
    setLoading(true);
    Axios.get('/playstations')
      .then(({data}) => {
        setPlayData(data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  };
  const fetchById = id => {
    if (id) {
      Axios.get(`/playstations/${id}`)
        .then(({data}) => {
          setPlay(data);
          dispatch(setPlaystation(data));
        })
        .catch(err => console.log(err));
    } else {
      console.log('not id for fetchById');
    }
  };

  const getOnePlaystation = () => {
    fetchById(playId);
  };
  useEffect(() => {
    fetchAllPlaystations();
  }, []);

  // useEffect(() => {
  //   getOnePlaystation();
  // }, [getOnePlaystation, playId]);

  const changeStatus = async (id, status) => {
    try {
      const {data} = await Axios.patch(`/playstations/status/${id}`, {
        status,
      });
      Alert.alert(
        'Success',
        'Status has been updated',
        [
          {
            text: 'OK',
            onPress: () => {
              //   if (data.status === STATUS_STEPS['6'].status) {
              //     return props.navigation.navigate('Uploads', { _id: load._id, contract: load.contract });
              //     }
              fetchAllPlaystations();
              getOnePlaystation();
            },
          },
        ],
        {cancelable: false},
      );
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
            // return props.navigation.navigate('Home', {});
            return props.navigation.reset({
              index: 0,
              routes: [{name: 'Arena'}],
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  if (playData.length > 0) {
    if (Object.entries(currentDay.data).length === 0) {
      console.log('navigation=>', props.navigation);
      alertStartDay();
    }
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          resizeMode="cover"
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F2b%2Fa8%2F12%2F2ba8126377a1d802121e191f5bcbda3f--phone-backgrounds-phone-wallpapers.jpg&f=1&nofb=1',
          }}>
          <View style={styles.buttonsContainer}>
            {playData.map((item, index) => (
              <BigButton key={index} item={item} setPlayId={setPlayId} />
            ))}
          </View>
          <PlaystationBoard play={play} changeStatus={changeStatus} />
        </ImageBackground>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          resizeMode="cover"
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0e%2F02%2F1d%2F0e021d26c7d0f811ec3f3679e483596b.jpg&f=1&nofb=1',
          }}>
          <View>
            <Text>no plays</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default PlaystationScreen;
