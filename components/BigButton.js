import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../constants';
import Styled from '../styles';

export default function BigButton({item, setPlaystation}) {
  if (item.status === 'free') {
    return (
      <Styled.Button primary onPress={() => setPlaystation(item)}>
        <Text style={styles.numberTextFree}>{item.number}</Text>
        <Text style={styles.typeTextFree}>{item.type}</Text>
      </Styled.Button>
    );
  } else {
    return (
      <Styled.Button onPress={() => setPlaystation(item)}>
        <Text style={styles.numberText}>{item.number}</Text>
        <Text style={styles.typeText}>{item.type}</Text>
      </Styled.Button>
    );
  }
}

const styles = StyleSheet.create({
  numberText: {
    textAlign: 'center',
    color: colors.main,
    fontSize: 20,
    fontWeight: '900',
  },
  typeText: {
    textAlign: 'center',
    color: colors.main,
    fontSize: 15,
    fontWeight: '700',
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
