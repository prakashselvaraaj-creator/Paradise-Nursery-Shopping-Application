import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // { id, name, price, image, quantity }
  },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      const existing = state.items.find((i) => i.id === plant.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
