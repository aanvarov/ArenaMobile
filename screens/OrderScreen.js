import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import Axios from '../utils/axios';
import {useSelector} from 'react-redux';

const OrderScreen = ({navigation}) => {
  const currentDay = useSelector(state => state.day);
  const [currentDayOrders, setCurrentDayOrders] = useState([]);
  const fetchAllOrdersByDay = () => {
    Axios.get(`/orders/byDay/${currentDay.dayId}`)
      .then(({data}) => {
        console.log(data);
        setCurrentDayOrders(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAllOrdersByDay();
  }, []);

  const orderBg = require('../assets/images/orderBg.jpg');
  return (
    <ScreenWrapper imgSource={orderBg}>
      <Header title="Tables" />
      <View>
        <Text style={{color: 'white'}}>Orderssss</Text>
      </View>
      <ScrollView>
        {currentDayOrders.map((item, index) => (
          <Text key={index} style={{color: 'white'}}>
            1
          </Text>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default OrderScreen;
