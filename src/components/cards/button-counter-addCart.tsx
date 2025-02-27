"use client"

import { useCounter } from "@/hook/useCounter";
import { cartStore } from "@/store/cart-store";
import { Product } from "@/interface";
import { IconCarrito } from "../icons/Icons";

interface Props {
    product: Product
}

export function ButtonCounterAddCart({ product }: Props) {

    const { counter, handleIncrement, handleDecrement } = useCounter()

    const addCart = cartStore(state => state.addCart)
    const changeCart = cartStore(state => state.changeCart)

    const handlerCart = (data: Product) => {
        addCart(data, counter)
        changeCart()
    }

    return (
        <div>

            {/* COUNTER  */}
            <div>
                <div className='flex justify-between text-xl mt-4 mb-6 items-center gap-2 max-w-[200px] mx-auto'>
                    <button onClick={handleDecrement} className=' bg-gray-800 px-2.5 rounded-full text-white'>-</button>
                    <span className='border px-7'>{counter}</span>
                    <button onClick={handleIncrement} className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white'>+</button>
                </div>
            </div>

            {/* BUTTON ADD CART  */}
            <div
                className="flex justify-center gap-4 my-4 mb-6 py-2 bg-red-500 text-white w-full rounded-full hover:bg-red-700 "
                onClick={() => handlerCart(product)}
            >
                <button className=''>Añadir</button>
                <IconCarrito size={20} />
            </div>

        </div>
    )
}
