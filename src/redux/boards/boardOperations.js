import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showToast } from 'components/Notification/ToastNotification';

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
      showToast('error', error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/editBoard/',
  async ({ newBoard, id }, { rejectWithValue }) => {
    try {
      console.log(newBoard);
      console.log(id);
      const { data } = await axios.patch(`/api/boards/${id}`, newBoard);
      return data;
    } catch (error) {
      showToast('error', error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/boards/${boardId}`);
      return { data, id: boardId };
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data.message === 'Cannot delete board with columns'
      ) {
        showToast(
          'error',
          `Board is not empty. ${error.response.data.message}`
        );
      } else {
        showToast('error', error.response.data.message);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const getBoards = createAsyncThunk(
  'boards/getBoards',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/boards');

      return data;
    } catch (error) {
      showToast('error', error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);
