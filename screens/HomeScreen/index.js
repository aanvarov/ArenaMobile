import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Styled from '../../styles';
// import t from '../../lang';
import Axios from '../../utils/axios';
import PageWrapper from '../../components/PageWrapper';
import {colors} from '../../constants';
import {useDispatch} from 'react-redux';
import {getDayNotClosed} from '../../store/Day/actions';

const HomeScreen = props => {
  const startDay = () => {
    Axios.post('/day')
      .then(({data}) => {
        console.log('-1-2-3-4-5-', data);
        dispatch(getDayNotClosed(data));
      })
      .catch(err => console.log(err));
  };
  const dispatch = useDispatch();
  const findNotClosed = () => {
    Axios.get('/day/findNotClosed')
      .then(({data}) => {
        console.log('-0-0-0-0-0-', data);
        if (data.length > 0) {
          dispatch(getDayNotClosed(data));
        }
      })
      .catch(err => console.log(err));
  };

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
          <Styled.Button onPress={startDay} bg={props.title.color}>
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
