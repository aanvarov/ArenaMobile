import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../constants';
import Styled from '../styles';
import {useDispatch} from 'react-redux';
import {setPlaystation} from '../store/Playstation/actions';

export default function PlaystationBoard({
  playstation,
  changeStatus,
  btnTitle,
}) {
  console.log('boardsssss', playstation);
  const dispatch = useDispatch();
  dispatch(setPlaystation(playstation));
  return (
    <View>
      <Styled.Title style={styles.title}>{playstation.number}</Styled.Title>
      <TouchableOpacity style={styles.button} onPress={changeStatus}>
        <Text style={styles.buttonText}>
          {playstation.status === 'free' ? 'Start' : 'Stop'}
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
