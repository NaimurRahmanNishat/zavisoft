// src/store/cart/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  size: number;
  quantity: number;
}

interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existing = state.items.find((i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity ?? 1,
        });
      }
    },

    removeFromCart: ( state, action: PayloadAction<{ id: number; size: number }>) => {
      state.items = state.items.filter((i) =>
          !(i.id === action.payload.id &&
          i.size === action.payload.size)
      );
    },

    updateQuantity: ( state, action: PayloadAction<{ id: number; size: number; quantity: number;}>) => {
      const item = state.items.find((i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
