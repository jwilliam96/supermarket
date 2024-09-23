"use client"

import { cartStore } from "@/store/cartStore"


export default function CartModal() {

    const isCart = cartStore(state => state.isCart)
    const changeCart = cartStore(state => state.changeCart)

    return (
        <div>
            <div className={`fixed bg-black/70 inset-0 z-[70] cursor-pointer ${!isCart && "hidden"}`} onClick={changeCart} />
            <div className={`fixed z-[80] bg-white w-[400px] right-0 top-0 bottom-0 transition-all duration-700 ${!isCart && "translate-x-full"}`}>
                <h2>hola</h2>
            </div>
        </div>
    )
}
