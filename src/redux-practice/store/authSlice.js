

import { createSlice } from "@reduxjs/toolkit";

// 인증 관련 초기 상태값
const initialAuthState = {
  isLoggedIn: false
};

// 인증 관련 슬라이스 추가
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    }, 
    logout(state) {
      state.isLoggedIn = false;
    }
  }
});


export const authActions = authSlice.actions;
export default authSlice.reducer;
