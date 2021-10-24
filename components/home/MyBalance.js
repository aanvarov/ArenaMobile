import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MyBalance = () => {
  const arrowImg = require('../../assets/images/arrow-right.png');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today's Balance</Text>
      <Text style={styles.balanceText}>25,520 uzs</Text>
      <TouchableOpacity style={styles.btn}>
        <Image style={styles.arrow} source={arrowImg} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '100%',
    backgroundColor: '#007AFF99',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
  },
  balanceText: {
    fontWeight: '900',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: -0.5,
    color: 'white',
  },
  arrow: {
    width: 11,
    height: 18,
  },
  btn: {
    position: 'absolute',
    right: 33,
    top: 46,
  },
});

export default MyBalance;
