import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/services/productApi";

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        selectedColor: string;
        selectedSize: string;
      }>,
    ) => {
      const { product, selectedColor, selectedSize } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          selectedColor,
          selectedSize,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },

    removeFromCart: (
      state,
      action: PayloadAction<{
        id: number;
        selectedColor: string;
        selectedSize: string;
      }>,
    ) => {
      const { id, selectedColor, selectedSize } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      );

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          ),
      );
    },

    incrementQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        selectedColor: string;
        selectedSize: string;
      }>,
    ) => {
      const { id, selectedColor, selectedSize } = action.payload;

      const item = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      );

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        selectedColor: string;
        selectedSize: string;
      }>,
    ) => {
      const { id, selectedColor, selectedSize } = action.payload;

      const item = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      );

      if (!item) return;

      if (item.quantity === 1) {
        // Auto-remove when quantity drops to 0
        state.items = state.items.filter(
          (i) =>
            !(
              i.id === id &&
              i.selectedColor === selectedColor &&
              i.selectedSize === selectedSize
            ),
        );
      } else {
        item.quantity -= 1;
      }

      state.totalQuantity -= 1;
      state.totalPrice -= item.price;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
