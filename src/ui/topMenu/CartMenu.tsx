"use client"


import { IconCarrito } from "@/components/icons/Icons";
import { cartStore } from "@/store/cartStore";

export default function CartMenu() {

    const changeCart = cartStore(state => state.changeCart)

    return (
        <div onClick={changeCart} className="cursor-pointer">
            <IconCarrito size={25} />
        </div>
    )
}
