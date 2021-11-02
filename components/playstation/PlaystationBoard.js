import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import Axios from '../../utils/axios';
import {Divider} from 'native-base';
import {useSelector} from 'react-redux';

export default function PlaystationBoard({
  playstation,
  changeStatus,
  navigation,
}) {
  const {
    isFree,
    _id: playstationId,
    hourlyPrice,
    number: tableNumber,
    type,
    totalTime,
    totalEarning,
  } = playstation;
  const [numOfPeople, setNumOfPeople] = useState(1);
  const currentDay = useSelector(state => state.day);
  const user = useSelector(state => state.auth);
  const [order, setOrder] = useState({});
  const handleStartAndStop = () => {
    if (isFree) {
      createOrder();
    } else {
      closeOrder();
    }
  };

  const createOrder = () => {
    Axios.post('/orders', {
      playstationId,
      hourlyPrice,
      numOfPeople,
      tableNumber,
      day: currentDay.dayId,
      club: user.user.role === 'club' ? user.user._id : user.user.club,
    })
      .then(({data}) => {
        console.log(data.payload);
        setOrder(data.payload);
        changeStatus(playstationId, !isFree, 0, 0);
      })
      .catch(err => console.log(err));
    console.log('order created');
    navigation.push('BottomTabNav', {routeName: 'orderScreen'});
  };

  const closeOrder = () => {
    Axios.patch(`/orders/${order._id}`, {
      startedAtTime: order.startedAtTime,
      numOfPeople,
      hourlyPrice,
    })
      .then(({data}) => {
        changeStatus(
          playstationId,
          !isFree,
          data.payload.price,
          data.payload.totalTime,
        );
      })
      .catch(err => console.log(err));
  };

  return (
    <View
      style={[
        styles.container,
        isFree ? null : {backgroundColor: '#00881199'},
      ]}>
      <View>
        <Text style={styles.text}>PS number: {tableNumber}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>PS type: {type}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>
          Total time: {String(totalTime).slice(0, 4)} min
        </Text>
        <Divider thickness={1} />
        <Text style={styles.text}>Total earning: {totalEarning} uzs</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>Status: {isFree ? 'free' : 'busy'}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>
          Hourly price:{' '}
          {numOfPeople > 1
            ? hourlyPrice + (numOfPeople - 1) * 2000
            : hourlyPrice}{' '}
          uzs
        </Text>
        <Divider thickness={1} />
        <Text style={styles.text}>Number of Players</Text>
        <View style={styles.numbersWrapper}>
          {[1, 2, 3, 4].map((num, index) => (
            <TouchableOpacity
              key={index}
              disabled={isFree ? false : true}
              style={[
                styles.numButton,
                num === numOfPeople ? {borderColor: 'lime'} : null,
              ]}
              onPress={() => setNumOfPeople(num)}>
              <Text style={styles.numText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Divider thickness={1} />
      </View>
      <TouchableOpacity
        style={styles.startButton}
        disabled={false}
        onPress={() => {
          handleStartAndStop();
          console.log('btn pressed');
        }}>
        <Text style={[styles.startButtonText, isFree ? null : {color: 'red'}]}>
          {isFree ? 'START' : 'STOP'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginVertical: 15,
    backgroundColor: '#12B0F890',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'lime',
    marginVertical: 14,
    textAlign: 'center',
  },
  numbersWrapper: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  numButton: {
    flex: 1,
    backgroundColor: '#000000',
    margin: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  numText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: 'lime',
    paddingVertical: 13,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#000000',
    color: 'lime',
  },
  buttonText: {
    textAlign: 'center',
    color: 'lime',
    fontSize: 20,
  },
  startButton: {
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 15,
  },
  startButtonText: {
    fontSize: 18,
    color: 'lime',
    textAlign: 'center',
    fontWeight: '700',
  },
});
