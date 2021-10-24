import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import FoodItem from '../components/bar/FoodItem';

export const foods = [
  {
    name: 'Cola',
    price: 12000,
    type: 'drinks',
  },
  {
    name: 'Cola1',
    price: 15000,
    type: 'drinks',
  },
  {
    name: 'Flesh',
    price: 8000,
    type: 'drinks',
  },
];

const BarScreen = props => {
  const barBg = require('../assets/images/barBg.jpg');
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScreenWrapper imgSource={barBg}>
      <Header title="Bar" />
      <ScrollView>
        {foods.map((food, index) => (
          <FoodItem key={index} food={food} />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default BarScreen;
