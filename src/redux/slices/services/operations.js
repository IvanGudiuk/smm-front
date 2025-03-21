import { api } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategoryList = createAsyncThunk(
  'services/getCategoryList',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/services', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getService = createAsyncThunk(
  'services/getService',
  async (credentials, thunkAPI) => {
    try {
      const { service } = credentials;
      const { data } = await api.get(`/services/${service}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
