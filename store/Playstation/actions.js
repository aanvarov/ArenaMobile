import * as types from './actionTypes';

export const clearPlaystation = () => {
  return {
    type: types.CLEAR_PLAYSTATION,
  };
};

export const setPlaystation = payload => {
  return {
    type: types.SET_PLAYSTATION,
    payload,
  };
};
