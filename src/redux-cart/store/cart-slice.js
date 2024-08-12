import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // 장바구니에 담긴 상품 객체들
  totalQuantity: 0, // 장바구니 총 수량
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      // 추가될 상품 객체 
      const newCartItem = action.payload;
      // 이 상품이 기존 장바구니배열에 있는 상품인지 탐색
      const existingItem = state.cartItems.find(item => item.id === newCartItem.id);

      if (!existingItem) { // 처음 장바구니에 추가된 상품인 경우
        state.cartItems.push(newCartItem);
      } else {
        existingItem.quantity++;
        existingItem.total += newCartItem.price;
      }
      state.totalQuantity++;
    },
    minusCartItem(state, action) {
      const itemId = action.payload.id;
      // 이 상품이 기존 장바구니배열에 있는 상품인지 탐색
      const existingItem = state.cartItems.find(item => item.id === itemId);

      if (existingItem && existingItem.quantity > 1) { // 장바구니에 있는 상품이고 수량이 1보다 많은 경우
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) { // 장바구니에 있는 상품이고 수량이 1인 경우
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      }
      state.totalQuantity--;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;