import React, {useEffect, useState} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';
import Axios from '../../utils/axios';
import Styled from '../../styles';
import PageWrapper from '../../components/PageWrapper';
import t from '../../lang';
import BigButton from '../../components/BigButton';
import PlaystationBoard from '../../components/PlaystationBoard';
import store from '../../store';

const HomeScreen = () => {
  // const prevPlay = store.getState().playstation;
  const [playstations, setPlaystations] = useState([]);
  const [playstation, setPlaystation] = useState({});
  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(false);

  const fetchAllPlaystations = async () => {
    setLoading(true);
    try {
      const {data} = await Axios.get('/playstations');
      setPlaystations(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPlaystations();
  }, []);

  const changeStatus = async () => {
    const playId = playstation._id;
    let status;
    if (playstation.status === 'free') {
      status = 'busy';
    } else {
      status = 'free';
    }
    setStatusLoading(true);
    try {
      const {data} = await Axios.patch(`/playstations/status/${playId}`, {
        status,
      });
      setStatusLoading(false);
      Alert.alert(
        'Success',
        t('Status has been updated'),
        [
          {
            text: 'OK',
            //   onPress: () => {
            //   if (data.status === STATUS_STEPS['6'].status) {
            //     return props.navigation.navigate('Uploads', { _id: load._id, contract: load.contract });
            //     }
            //  },
          },
        ],
        {cancelable: false},
      );
      fetchAllPlaystations();
      console.log(data);
    } catch (error) {
      console.log(error);
      setStatusLoading(false);
    }
  };

  if (playstations.length > 0) {
    return (
      <>
        <View style={styles.buttonsContainer}>
          {playstations.map(item => (
            <BigButton item={item} setPlaystation={setPlaystation} />
          ))}
        </View>
        <PlaystationBoard
          playstation={playstation}
          changeStatus={changeStatus}
        />
      </>
    );
  } else {
    return (
      <PageWrapper>
        <View>
          <Text>no plays</Text>
        </View>
      </PageWrapper>
    );
  }
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HomeScreen;
