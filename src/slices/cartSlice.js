import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {
      const { payload } = action;
      state.items.push(payload);
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      const index = state.items.findIndex((item) => item.id === payload.id);
      let newItems = [...state.items];
      if (index > -1) {
        newItems.splice(index, 1);
      } else {
        console.log(`Item not found id ${payload.id}`);
      }
      state.items = newItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

export default cartSlice.reducer;
