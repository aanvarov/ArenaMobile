import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
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
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8f%2Fba%2Fcb%2F8fbacbd464e996966eb9d4a6b7a9c21e--sultan.jpg%3Fb%3Dt&f=1&nofb=1',
        }}>
        <ScrollView>
          {foods.map((food, index) => (
            <FoodItem key={index} food={food} />
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BarScreen;
