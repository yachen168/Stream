import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  async GET(url, params) {
    try {
      const response = await backend.get(url, {
        params,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.data);
    }
  },
  async POST(url, body, config) {
    try {
      const response = await backend.post(url, body, config);
      return response.data;
    } catch (error) {
      throw new Error(error.data);
    }
  },
  async DELETE(url) {
    try {
      const response = await backend.delete(url);
    } catch (error) {
      throw new Error(error.data);
    }
  },
};
