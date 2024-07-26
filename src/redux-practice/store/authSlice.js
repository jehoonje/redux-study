

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

// 슬라이스 안에 reducers에 정의한 함수들을 내보내기
export const authActions = authSlice.actions;


export default authSlice.reducer;
