import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';

const OrderScreen = ({navigation}) => {
  const orderBg = require('../assets/images/orderBg.jpg');
  return (
    <ScreenWrapper imgSource={orderBg}>
      <Header title="Tables" />
      <View>
        <Text style={{color: 'white'}}>Orderssss</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 34,
  },
});

export default OrderScreen;
