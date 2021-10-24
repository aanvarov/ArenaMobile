import * as types from './actionTypes';

const initialState = {
  dayId: null,
  day: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STARTED_DAY: {
      return {
        dayId: action.payload.dayId,
        day: action.payload.day,
      };
    }
    case types.CLEAR_DAY: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
