import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {colors} from '../constants';
import Styled from '../styles';

export default function PageWrapper(props) {
  return (
    <SafeAreaView style={{minHeight: 700, flex: 1}}>
      <ScrollView
        style={{minHeight: 700, flex: 1}}
        contentInsetAdjustmentBehavior="automatic">
        <Styled.Page bg={props.bg}>{props.children}</Styled.Page>
      </ScrollView>
    </SafeAreaView>
  );
}
