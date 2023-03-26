import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return action.payload != item.id;
      });
    },
    increaseItemQty: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id == action.payload) {
          item.qty = item.qty + 1;
        }
      });
    },
    decreaseItemQty: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id == action.payload) {
          item.qty = item.qty - 1;
        }
      });
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  increaseItemQty,
  decreaseItemQty,
} = cartSlice.actions;

export default cartSlice.reducer;
