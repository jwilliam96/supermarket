"use client"

import { IoIosArrowForward } from "react-icons/io"
import { cartStore } from "@/store/cartStore"
import { Button, CartProducts } from "@/components"
import Link from "next/link"

export default function CartModal() {

    const cartProduct = cartStore(state => state.cartState)
    const changeCart = cartStore(state => state.changeCart)
    const isCart = cartStore(state => state.isCart)


    const account: number[] = []
    cartProduct.map(item => {
        const { product } = item
        let price = product.price
        if (product.offer) {
            price = product.price - (product.price * 0.20)
        }
        account.push(price * item.quantity)
    })

    const subTotal = account.reduce((p, s) => p + s, 0)

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
                    <p className="text-3xl font-bold text-gray-700">Subtotal: <span className="text-3xl font-semibold text-green-700">$ {subTotal.toFixed(2)}</span></p>


                    <Link href={"/cart"} onClick={changeCart}>
                        <Button text="Ver carrito" className="w-full" />
                    </Link>
                </div>

            </div>
        </div>
    )
}
