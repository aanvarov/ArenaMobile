import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const FoodItem = ({food}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{food.name}</Text>
      <Text style={styles.text}>{food.price}</Text>
      <Text style={styles.text}>11</Text>
      <TouchableOpacity>
        <Text>Add</Text>
        <TextInput keyboardType="number-pad" placeholder="number" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderColor: 'grey',
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default FoodItem;
