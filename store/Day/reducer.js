import * as types from './actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DAY_NOT_CLOSED: {
      return {
        ...state,
        data: action.payload,
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
