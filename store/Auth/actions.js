import * as types from './actionTypes';

export const signInSuccess = (
  payload = {
    user: {},
    token: '',
  },
) => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload,
  };
};

export const signOutSuccess = payload => {
  console.log('signOutSuccess');
  return {
    type: types.SIGN_OUT_SUCCESS,
    payload,
  };
};
