import * as types from './actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PLAYSTATION: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.CLEAR_PLAYSTATION: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
