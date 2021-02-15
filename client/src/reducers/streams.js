import { SIGN_IN, SIGN_OUT } from '../actions/actionTypes';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_STREAMS: {
      return { ...state, isSignedIn: true, userId: payload };
    }

    case FETCH_STREAM: {
      return { ...state, [payload.streamId]: action.payload };
    }
    case CREATE_STREAM: {
      return { ...state, [payload.streamId]: action.payload };
    }

    case EDIT_STREAM: {
      return { ...state, [payload.streamId]: action.payload };
    }

    case DELETE_STREAM: {
      return { ...state, isSignedIn: true, userId: payload };
    }

    default: {
      return state;
    }
  }
};
