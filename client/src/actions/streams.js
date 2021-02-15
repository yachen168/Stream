import API from '../api/service';
import { CREATE_STREAM } from './actionTypes';

export const createStream = (formData) => {
  return async (dispatch) => {
    const response = await API.POST('/streams', formData);

    dispatch({ type: CREATE_STREAM, payload: response });
  };
};
