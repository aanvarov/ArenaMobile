import React, {useEffect} from 'react';
import {View, Text, Alert, Button, StyleSheet} from 'react-native';
import Axios from '../../utils/axios';
import Styled from '../../styles';
import t from '../../lang';

const HomeScreen = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: props.title.title,
      headerStyle: {
        backgroundColor: props.title.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      },
    });
  }, [props.navigation, props.title]);
  return (
    <>
      <View>
        <Text>Nima gapla urto</Text>
        <Text>Nima gapla urto</Text>
        <Text>Nima gapla urto</Text>
        <Text>Nima gapla urto</Text>
        <Text>Nima gapla urto</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HomeScreen;
