import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';

// 단일 리덕스 스토어 생성
const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer
  }
});

export default store;