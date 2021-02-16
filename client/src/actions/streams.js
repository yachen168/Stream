import API from '../api/service';
import history from '../history';
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

export const fetchStream = (id) => async (dispatch) => {
  const response = await API.GET(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response });
};

export const createStream = (formData) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.POST('/streams', { ...formData, userId });

  dispatch({ type: CREATE_STREAM, payload: response });
  history.push('/');
};

export const editStream = (id, formData) => async (dispatch) => {
  const response = await API.PATCH(`/streams/${id}`, formData);

  dispatch({ type: EDIT_STREAM, payload: response });
  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await API.DELETE(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
