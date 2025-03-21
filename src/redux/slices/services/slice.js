import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoryList,
  getService,
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
  category: [],
  service: {},
};

const serviceSlice = createSlice({
  name: 'service',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategoryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getCategoryList.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.status = 'error';
      })
      .addCase(getService.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.service = action.payload;
      })
      .addCase(getService.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.status = 'error';
      });
  },
});

// export const {
//   setIsLoggedIn,
//   setMessage,
//   setStatus,
//   setLang,
//   setEmail,
//   setIsInformed,
//   setAuthError,
//   setIsWarningShown,
//   setLink,
//   setIsModalShown,
//   setModalType,
// } = authSlice.actions;

export const serviceReducer = serviceSlice.reducer;
