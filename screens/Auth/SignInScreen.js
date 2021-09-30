import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
  KeyboardAvoidingView,
  Platform,
  // TouchableOpacity,
  View,
  // SafeAreaView,
  StyleSheet,
  Text,
  // Linking,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import Styled from '../../styles';
import t from '../../lang';
import Axios from '../../utils/axios';
import {signInSuccess} from '../../store/Auth/actions';
import {colors} from '../../constants';
import Logo from '../../assets/images/Logo';

export default function SignIn() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    phone: '',
    password: '',
    type: 'admin',
  });

  const handleSignIn = () => {
    try {
      setLoading(true);
      return Axios.post('/auth/sign-in', userData)
        .then(async ({data}) => {
          console.log('user data', data);
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
    } catch (err) {
      setLoading(false);
      console.log(err, 'err');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Logo style={styles.logo} height={100} />
      <View style={styles.maxWidth}>
        <Styled.Title color="#fff" style={styles.title}>
          {t('Welcome')}
        </Styled.Title>
        {error ? (
          <Text style={styles.errorMsg}>
            <AntIcon name="closeCircle" color={colors.danger} size={18} />{' '}
            {error}
          </Text>
        ) : null}
        <TextInput
          mode="outlined"
          // label={t("Phone number")}
          style={styles.input}
          placeholder="Login"
          // right={<Icons name="screen-smartphone" size={20} />}
          onChangeText={phone => setUserData(data => ({...data, phone}))}
          selectionColor={colors.danger}
        />
        <TextInput
          mode="outlined"
          // label={t("Password")}
          placeholder="Password"
          secureTextEntry
          // right={<AntIcon name="phone" style={{ color: 'red', fontSize: 30 }} />}
          onChangeText={password => setUserData(data => ({...data, password}))}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{...styles.input, marginTop: 15}}
          selectionColor={colors.danger}
        />
        <Button
          icon="lock"
          mode="contained"
          style={styles.button}
          disabled={loading}
          loading={loading}
          onPress={handleSignIn}
          dark
          // eslint-disable-next-line react-native/no-inline-styles
          labelStyle={{color: '#fff'}}>
          {t('Sign in')}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    // marginBottom: 100,
    height: 100,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    alignItems: 'center',
    textAlign: 'center',
  },
  errorMsg: {
    color: '#fff',
    marginBottom: 12,
    fontSize: 16,
  },
  maxWidth: {},
  container: {
    backgroundColor: '#025199',
    paddingVertical: 35,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flex: 1,
  },
  page: {
    backgroundColor: '#025199',
    paddingVertical: 35,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
    backgroundColor: colors.orange,
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  input: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  linkButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
  },
});
