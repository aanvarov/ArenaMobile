import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import {colors} from '../../constants';
import {useDispatch} from 'react-redux';
import Axios from '../../utils/axios';

export default function PlaystationBoard({play, changeStatus}) {
  let status = 'busy';
  if (play.status === 'busy') {
    status = 'free';
  }
  const [selectedValue, setSelectedValue] = useState(1);
  return (
    <View>
      <Text>PS number: {play.number}</Text>
      <Text>hourly price: {play.hourlyPrice}</Text>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
      </Picker>
      <Text>{play.status}</Text>
      <Text>{play.totalEarning}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeStatus(play._id, status)}>
        <Text style={styles.buttonText}>
          {play.status === 'free' ? 'Start' : 'Stop'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
  },
  button: {
    backgroundColor: colors.mainDark,
    padding: 15,
    borderRadius: 10,
    width: 200,
    marginHorizontal: 90,
  },
  numberTextFree: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
  },
  typeTextFree: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
