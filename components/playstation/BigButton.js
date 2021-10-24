import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function BigButton({playstation}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.number}>{playstation.number}</Text>
      <Text style={styles.type}>{playstation.type}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 2,
    padding: 8,
  },
  number: {
    color: 'lime',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
  type: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
  },
});
