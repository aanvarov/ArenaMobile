import React from 'react';
import MainRouter from './routes/index';
import SignInScreen from './screens/Auth/SignInScreen';
import {useSelector} from 'react-redux';

const App = () => {
  const myAccount = useSelector(state => state.auth);
  if (myAccount.token) {
    return <MainRouter />;
  }

  return <SignInScreen />;
};

export default App;
