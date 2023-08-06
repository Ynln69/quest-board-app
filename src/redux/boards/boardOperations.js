import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const createBoard = createAsyncThunk(
  'boards/createBoard',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const { data } = await axios.post('/api/boards', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async (credentials, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const res = await axios.delete('/boards/deleteBoard');
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
