import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import Axios from '../../utils/axios';
import {Divider} from 'native-base';

export default function PlaystationBoard({playstation, changeStatus}) {
  const {isFree, _id} = playstation;
  const [numOfPeople, setNumOfPeople] = useState(1);
  return (
    <View
      style={[
        styles.container,
        isFree ? null : {backgroundColor: '#99ffff55'},
      ]}>
      <View>
        <Text style={styles.text}>PS number: {playstation.number}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>PS type: {playstation.type}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>Total time: {playstation.totalTime}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>
          Total earning: {playstation.totalEarning} uzs
        </Text>
        <Divider thickness={1} />
        <Text style={styles.text}>Status: {playstation.isFree}</Text>
        <Divider thickness={1} />
        <Text style={styles.text}>
          Hourly price: {playstation.hourlyPrice} uzs
        </Text>
        <Divider thickness={1} />
        <Text style={styles.text}>Number of Players</Text>
        <View style={styles.numbersWrapper}>
          {[1, 2, 3, 4].map((num, index) => (
            <TouchableOpacity
              key={index}
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
          changeStatus(_id, !isFree);
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
    backgroundColor: '#12B0F866',
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
