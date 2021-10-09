import React, {useEffect, useState} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';
import BigButton from '../../components/BigButton';
import PlaystationBoard from '../../components/PlaystationBoard';
import Axios from '../../utils/axios';
import Styled from '../../styles';
import PageWrapper from '../../components/PageWrapper';
import store from '../../store';
import {useDispatch} from 'react-redux';
import {setPlaystation} from '../../store/Playstation/actions';

const PlaystationScreen = props => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    getOnePlaystation();
  }, [playId]);

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

  if (playData.length > 0) {
    return (
      <>
        <View style={styles.buttonsContainer}>
          {playData.map(item => (
            <BigButton item={item} setPlayId={setPlayId} />
          ))}
        </View>
        <PlaystationBoard play={play} changeStatus={changeStatus} />
      </>
    );
  } else {
    return (
      <View>
        <Text>no plays</Text>
      </View>
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
