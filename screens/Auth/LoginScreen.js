import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import Axios from '../../utils/axios';
import {signInSuccess} from '../../store/Auth/actions';
import ScreenWrapper from '../../components/ScreenWrapper';

export default function SignIn() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    phone: '',
    password: '',
  });

  const handleLink = () =>
    Linking.openURL('https://www.instagram.com/westminsterian/');

  const handleSignIn = () => {
    try {
      setLoading(true);
      if (data.password === '' || data.phone === '') {
        setError('Please enter phone number and password');
        setLoading(false);
      } else {
        return Axios.post('/auth/sign-in', data)
          .then(async ({data}) => {
            // console.log('user data', data);
            if (data.token && data.success) {
              setLoading(false);
              dispatch(signInSuccess(data));
            } else {
              setError(data.msg);
            }
          })
          .catch(err => {
            setLoading(false);
            setError(err?.response?.data?.msg || err?.response?.data);
          });
      }
    } catch (err) {
      setLoading(false);
      console.log(err, 'error=-=-=-=-=-');
    }
  };
  const loginBg = require('../../assets/images/loginBg.jpg');
  return (
    <ScreenWrapper imgSource={loginBg} fullHeight>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.logoTitle}>Arena</Text>
              <Text style={styles.title}>Playstation Club</Text>
            </View>
            <View>
              {error ? (
                <Text style={styles.errorMsg}>
                  <AntIcon name="closecircle" color={'yellow'} size={15} />{' '}
                  {error}
                </Text>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#33333388"
                keyboardType="name-phone-pad"
                onChangeText={phone => setData(data => ({...data, phone}))}
              />
              <TextInput
                style={{...styles.input, marginTop: 15}}
                placeholderTextColor="#33333388"
                placeholder="Password"
                secureTextEntry
                onChangeText={password =>
                  setData(data => ({...data, password}))
                }
              />
              <Button
                style={styles.button}
                isLoading={loading}
                isDisabled={loading}
                isLoadingText="Signing In"
                onPress={handleSignIn}>
                Sign In
              </Button>
            </View>
            <TouchableOpacity style={styles.linkButton} onPress={handleLink}>
              <Text style={styles.linkText}>Made By Westminsterian</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF77',
    borderRadius: 45,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
  logoTitle: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    borderRadius: 10,
    color: 'black',
    fontSize: 16,
  },
  errorMsg: {
    color: '#fff',
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '700',
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    backgroundColor: 'orange',
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linkButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  linkText: {
    color: 'yellowgreen',
    textAlign: 'center',
  },
});
