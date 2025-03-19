import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  // login,
  // logout,
  // verify,
  // restorePassword,
  // checkRestoreKey,
  // resetPassword,
  // refreshToken,
  // deleteEmployee,
  // deleteSpot,
  // newEmployee,
  // resendVerify,
  // getAllEmployees,
  // getAllSpots,
  // newSpot,
  // changeEmployees,
  // getPayment,
} from './operations';

const initialState = {
  id: '4534657',
  email: '',
  lang: 'en',
  isLoggedIn: false,
  isLoading: false,
  message: '',
  status: '',
  token: null,
  balance: 34,
  error: '',
  isModalShown: false,
  modalType: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setIsModalShown: (state, action) => {
      state.isModalShown = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setIsInformed: (state, action) => {
      state.isInformed = action.payload;
    },
    setIsWarningShown: (state, action) => {
      state.isWarningShown = action.payload;
    },
    setLink: (state, action) => {
      state.link = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRegistered = true;
        state.lang = action.payload.lang;
        state.email = action.payload.email;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.status = 'error';
      });
  },
});

export const {
  setIsLoggedIn,
  setMessage,
  setStatus,
  setLang,
  setEmail,
  setIsInformed,
  setAuthError,
  setIsWarningShown,
  setLink,
  setIsModalShown,
  setModalType,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
