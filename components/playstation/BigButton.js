import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function BigButton({item, setPlaystation, activePlaystation}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        item.isFree ? null : {backgroundColor: '#21B079'},
        item._id === activePlaystation?._id ? {borderColor: 'yellow'} : null,
      ]}
      onPress={() => setPlaystation(item)}>
      <Text style={[styles.number, item.isFree ? null : {color: 'black'}]}>
        {item.number}
      </Text>
      <Text style={[styles.type, item.isFree ? null : {color: 'black'}]}>
        {item.type}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 2,
    padding: 8,
    borderWidth: 1,
    borderColor: 'transparent',
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
