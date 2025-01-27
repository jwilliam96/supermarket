"use client"

import { currencyFormat } from "@/utils/currencyFormat"
import { CartProducts, LinkButton } from "@/components"
import { IoIosArrowForward } from "react-icons/io"
import { cartStore } from "@/store/cart-store"
import { useEffect, useState } from "react"

export default function CartModal() {

    const cartProducts = cartStore(state => state.cartState)
    const changeCart = cartStore(state => state.changeCart)
    const isCart = cartStore(state => state.isCart)

    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        const { subTotal } = cartStore.getState().getTotal()
        setSubTotal(subTotal)


    }, [cartProducts])

    return (
        <div>
            {/* FONDO NEGRO  */}
            <div
                className={`fixed backdrop-filter backdrop-blur-sm bg-black/70 inset-0  z-[70] cursor-pointer ${!isCart && "hidden"}`}
                onClick={changeCart} />

            {/* CONTAINER CART  */}
            <div className={`fixed flex flex-col z-[80] bg-white max-w-[400px] right-0 top-0 bottom-0 transition-all duration-700 ${!isCart && "translate-x-full"}`}>

                {/* CERRAR MODAL  */}
                <div className="py-10 bg-red-500 text-white text-2xl font-semibold relative">
                    <IoIosArrowForward size={35} className="absolute left-10 cursor-pointer" onClick={changeCart} />
                    <h2 className=" text-center">Carrito</h2>
                </div>

                {/* CART PRODUCTS  */}
                <CartProducts />

                {/* SUBTOTAL  */}
                <div className="px-6 pt-8 ">
                    <p className="text-3xl font-bold text-gray-700">Subtotal: <span className="text-3xl font-semibold text-green-700">{currencyFormat(subTotal)}</span></p>

                    <div onClick={changeCart}>
                        <LinkButton text="Ver carrito" className="w-full" href="/cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}
