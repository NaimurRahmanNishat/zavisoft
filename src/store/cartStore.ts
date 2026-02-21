// src/store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  size: number;
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number, size: number) => void;
  updateQuantity: (id: number, size: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === product.id && i.size === product.size
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id && i.size === product.size
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (id, size) =>
        set((state) => ({
          items: state.items.filter((i) => !(i.id === id && i.size === size)),
        })),
      updateQuantity: (id, size, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id && i.size === size ? { ...i, quantity } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart-storage" }
  )
);
