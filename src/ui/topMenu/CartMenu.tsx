"use client"

import { IconCarrito } from "@/components/icons/Icons";
import { cartStore } from "@/store/cartStore";

export default function CartMenu() {

    const changeCart = cartStore(state => state.changeCart)
    const quantityCart = cartStore(state => state.cartState)

    return (
        <div onClick={changeCart} className="cursor-pointer relative">
            {
                quantityCart.length > 0 && (
                    <div className="absolute -top-3 -right-3 size-6 bg-red-700 text-white flex justify-center items-center rounded-full border-2 border-white">{quantityCart.length}</div>
                )
            }
            <IconCarrito size={25} />
        </div>
    )
}
