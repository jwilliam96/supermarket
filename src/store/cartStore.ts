import { persist } from "zustand/middleware";
import { Product } from "@/interface";
import { create } from "zustand";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    cartState: CartItem[];
    addCart: (data: Product, quantity: number) => void;
    decrementCart: (data: Product, quantity: number) => void
    deleteCart: (id: string) => void;
    getTotal: () => {
        items: number
        subTotal: number
        porcentaje: number
        total: number
    }

    isCart: boolean
    changeCart: () => void
}

export const cartStore = create<Cart>()(
    persist(
        (set, get) => ({
            cartState: [],

            getTotal: () => {
                const { cartState } = get()

                const account: number[] = []
                cartState.map(item => {
                    const { product } = item
                    let price = product.price
                    if (product.offer) {
                        price = product.price - (product.price * 0.20)
                    }
                    account.push(price * item.quantity)
                })

                const items = cartState.length
                const subTotal = account.reduce((p, s) => p + s, 0)
                const porcentaje = subTotal * 0.15
                const total = subTotal + porcentaje

                return { subTotal, porcentaje, total, items }
            },

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
            decrementCart: (data, quantity = 1) => set(state => {
                const updatedCart = state.cartState.map((item) =>
                    data.id === item.product.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - quantity }
                        : item
                )
                return { cartState: updatedCart }
            }),

            deleteCart: (id) => set((state) => ({
                cartState: state.cartState.filter((item) => item.product.id !== id),
            })),

            isCart: false,
            changeCart: () => set(state => ({ isCart: !state.isCart }))

        }),
        {
            name: "cart-product"
        }
    )
);
