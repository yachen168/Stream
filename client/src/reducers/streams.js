import _ from 'lodash';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_STREAMS: {
      return { ..._.mapKeys(payload, 'id') };
    }

    case FETCH_STREAM: {
      return { ...state, [payload.streamId]: payload };
    }

    case CREATE_STREAM: {
      return { ...state, [payload.streamId]: payload };
    }

    case EDIT_STREAM: {
      return { ...state, [payload.streamId]: payload };
    }

    case DELETE_STREAM: {
      return _.omit(state, payload);
    }

    default: {
      return state;
    }
  }
};
