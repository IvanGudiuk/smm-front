import { api, setAuthHeader } from "api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/register", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { email = "", password = "" } = credentials;

      const { data } = await api.post("/users/login", { email, password });
      if (data.token) {
        setAuthHeader(data.token);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async (credentials, thunkAPI) => {
    try {
      const { token } = credentials;
      const { data } = await api.get(`/users/verify/${token}`);
      if (data?.token) {
        setAuthHeader(data.token);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const resendVerify = createAsyncThunk(
  "auth/resendVerify",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/verify/resend/", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (credentials, thunkAPI) => {
    try {
      await api.post("/users/logout", credentials);
      setAuthHeader();
      localStorage.clear();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const restorePassword = createAsyncThunk(
  "auth/restorePassword",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post(`/users/restore`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post(`/users/password/reset`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const checkRestoreKey = createAsyncThunk(
  "auth/checkRestoreKey",
  async (credentials, thunkAPI) => {
    try {
      const { restoreKey } = credentials;
      const { data } = await api.get(`/users/restore/${restoreKey}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const changeEmployees = createAsyncThunk(
  "auth/changeEmployees",
  async (credentials, thunkAPI) => {
    try {
      const { id, employees } = credentials;
      const { data } = await api.post(`/spots/${id}/employees`, {
        employees,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllSpots = createAsyncThunk(
  "auth/getAllSpots",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`/spots`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllEmployees = createAsyncThunk(
  "auth/getAllEmployees",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`/employees`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (credentials, thunkAPI) => {
    try {
      const { id } = credentials;
      const { data } = await api.patch(`/spots/${id}/refresh`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "auth/deleteEmployee",
  async (credentials, thunkAPI) => {
    try {
      const { id } = credentials;
      const { data } = await api.delete(`/employees/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const newEmployee = createAsyncThunk(
  "auth/newEmployee",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post(`/employees/new`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const newSpot = createAsyncThunk(
  "actions/newSpot",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/spots/new", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteSpot = createAsyncThunk(
  "auth/deleteSpot",
  async (credentials, thunkAPI) => {
    try {
      const { id } = credentials;
      const { data } = await api.delete(`/spots/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPayment = createAsyncThunk(
  "auth/getPayment",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/payment", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
