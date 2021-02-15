import API from '../api/service';

export const createStream = (formData) => {
  return async () => {
    await API.post('/streams', formData);
  };
};
