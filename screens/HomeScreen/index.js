import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Axios from '../../utils/axios';
import Styled from '../../styles';
import t from '../../lang';
import PageWrapper from '../../components/PageWrapper';
import {colors} from '../../constants';
import {SvgCss} from 'react-native-svg';
import StartDayPage from './StartDayPage';

const HomeScreen = props => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
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
    <PageWrapper bg="#000">
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require('../../assets/images/playstation.gif')}>
        <View style={styles.content}>
          <Styled.SubTitle align="center" color={colors.poppy}>
            Arena Playstation Club
          </Styled.SubTitle>
          <Styled.SubTitle size="34px" align="center" color={colors.white}>
            {date.toLocaleTimeString()}
          </Styled.SubTitle>
          <Styled.Button bg={props.title.color}>
            <Styled.Text align="center" color={colors.poppy} weight="700">
              Start Day
            </Styled.Text>
          </Styled.Button>
        </View>
      </ImageBackground>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: Dimensions.get('screen').height - 240,
  },
  imgBackground: {
    height: 400,
    width: '100%',
  },
});

export default HomeScreen;
