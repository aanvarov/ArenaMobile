import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors, styleConfigs} from '../constants';

const {paddingHorizontal, paddingVertical} = styleConfigs.page;
const S = {};

S.ImageBackground = styled.ImageBackground`
  height: ${Dimensions.get('screen').height - 150}px;
  resize-mode: cover;
  source: ${props => props.url};
`;

S.Page = styled.ScrollView`
  min-height: ${Dimensions.get('screen').height - 150}px;
  background-color: ${props => (props.bg ? props.bg : colors.secondary)};
  padding: ${paddingVertical}px ${paddingHorizontal}px;
  padding-bottom: 150px;
  width: 100%;
`;

S.Title = styled.Text`
  font-size: ${props => props.size || '32px'};
  font-weight: ${props => props.weight || 700};
  margin-bottom: 35px;
  color: ${props => props.color || colors.text};
`;

S.SubTitle = styled.Text`
  font-size: ${props => props.size || '24px'};
  font-weight: ${props => props.weight || 500};
  color: ${props => props.color || colors.text};
  text-align: ${props => props.align || 'left'};
`;

S.Text = styled.Text`
  font-weight: ${props => props.weight || 400};
  color: ${props => props.color || colors.text};
  font-size: ${props => props.size || '16px'};
  text-align: ${props => props.align || 'left'};
`;

S.Button = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${props =>
    props.primary ? colors.main : props.bg ? props.bg : '#fff'};
  padding: ${props =>
    props.size === 'lg' ? '15px' : props.size === 'small' ? '5px' : '10px'};
`;

export default S;
