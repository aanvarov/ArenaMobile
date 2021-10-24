import React from 'react';
import {SignedInStack, SignedOutStack} from './navigation';
import {useSelector} from 'react-redux';

const AuthNavigation = () => {
  const currentUser = useSelector(state => state.auth);
  return <>{currentUser.token ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
