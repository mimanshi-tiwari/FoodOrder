import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // * mutating the state here
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[itemIndex].quantity += 1;
      }
    },
    removeItem: (state, action) => {
      state.items.forEach((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            const itemIndex = state.items.findIndex(
              (item) => item.id === action.payload.id
            );
            state.items.splice(itemIndex, 1);
          }
        }
      });
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
