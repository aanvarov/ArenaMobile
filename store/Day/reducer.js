import * as types from './actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STARTED_DAY: {
      return {
        data: action.payload.data,
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
