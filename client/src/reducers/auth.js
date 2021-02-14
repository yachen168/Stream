import { SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

const INITIAL_STATE = {
  isSignedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN: {
      return { ...state, isSignedIn: true };
    }
    case SIGN_OUT: {
      return { ...state, isSignedIn: false };
    }

    default: {
      return state;
    }
  }
};
