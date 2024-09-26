import { Product } from "@/interface";
import { create } from "zustand";

interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    cartState: CartItem[];
    addCart: (data: Product, quantity: number) => void;
    deleteCart: (id: string) => void;

    isCart: boolean
    changeCart: () => void
}

export const cartStore = create<Cart>()((set) => ({
    cartState: [],
    addCart: (data, quantity = 1) => set((state) => {

        // busca que el producto exista por medio del id
        // si existe marca 1 sino -1
        const existingProduct = state.cartState.findIndex(
            (item) => item.product.id === data.id
        );

        if (existingProduct !== -1) {
            // Si el producto ya está en el carrito, incrementa su cantidad
            const updatedCart = state.cartState.map((item) =>
                data.id === item.product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );

            return { cartState: updatedCart };
        } else {
            // Si el producto no existe en el carrito, lo agrega con cantidad que se envía
            return {
                cartState: [...state.cartState, { product: data, quantity: quantity }],
            };
        }
    }),
    deleteCart: (id) => set((state) => ({
        cartState: state.cartState.filter((item) => item.product.id !== id),
    })),

    isCart: false,
    changeCart: () => set(state => ({ isCart: !state.isCart }))

}));
