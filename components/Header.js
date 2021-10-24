import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Divider} from 'native-base';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assets/images/psIcon.png')}
        />
      </View>
      <Divider bg="yellow.400" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
});

export default Header;
