import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://tp-backend-905x.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async data => {
    try {
      const response = await axios.put('/api/profile', data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);