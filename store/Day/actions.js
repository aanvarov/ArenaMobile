import * as types from './actionTypes';

export const clearDay = () => {
  return {
    type: types.CLEAR_DAY,
  };
};

export const getDayNotClosed = payload => {
  return {
    type: types.GET_DAY_NOT_CLOSED,
    payload,
  };
};
