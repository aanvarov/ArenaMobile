import * as types from './actionTypes';

export const getStartedDay = (
  payload = {
    day: {},
    dayId: '',
  },
) => {
  return {
    type: types.GET_STARTED_DAY,
    payload,
  };
};

export const clearDay = payload => {
  console.log('clearDay');
  return {
    type: types.CLEAR_DAY,
    payload,
  };
};
