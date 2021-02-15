import API from '../api/service';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './actionTypes';

export const fetchStreams = () => async (dispatch) => {
  const response = await API.GET('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const response = await API.GET(`/streams/${streamId}`);

  dispatch({ type: FETCH_STREAM, payload: response });
};

export const createStream = (formData) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.POST('/streams', { ...formData, userId });

  dispatch({ type: CREATE_STREAM, payload: response });
};

export const editStream = (streamId, formData) => async (dispatch) => {
  const response = await API.PUT(`/streams/${streamId}`, formData);

  dispatch({ type: EDIT_STREAM, payload: response });
};

export const deleteStream = (streamId) => async (dispatch) => {
  await API.DELETE(`/streams/${streamId}`);

  dispatch({ type: DELETE_STREAM, payload: streamId });
};
