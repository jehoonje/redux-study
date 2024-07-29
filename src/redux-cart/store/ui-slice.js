import { createSlice } from "@reduxjs/toolkit";

// 상태관리할 값들의 초기값
const initialState = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // 상태변경 행위 (액션함수)
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  }
});

// 액션 함수들 내보내기
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;