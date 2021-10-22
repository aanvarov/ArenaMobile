import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

export default function BigButton({item, setPlayId}) {
  if (item.status === 'free') {
    return (
      <Button primary onPress={() => setPlayId(item._id)}>
        <Text style={styles.numberTextFree}>{item.number}</Text>
        <Text style={styles.typeTextFree}>{item.type}</Text>
      </Button>
    );
  } else {
    return (
      <Button onPress={() => setPlayId(item._id)}>
        <Text style={styles.numberText}>{item.number}</Text>
        <Text style={styles.typeText}>{item.type}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  numberText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
  typeText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  numberTextFree: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
  typeTextFree: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
});
