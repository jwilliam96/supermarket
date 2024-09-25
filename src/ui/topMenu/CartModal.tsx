"use client"

import { cartStore } from "@/store/cartStore"
import Image from "next/image"


export default function CartModal() {

    const cartProduct = cartStore(state => state.cartState)
    const changeCart = cartStore(state => state.changeCart)
    const isCart = cartStore(state => state.isCart)

    return (
        <div>

            {/* FONDO NEGRO  */}
            <div
                className={`fixed bg-black/70 inset-0  z-[70] cursor-pointer ${!isCart && "hidden"}`}
                onClick={changeCart} />

            <div className={`fixed z-[80] bg-white w-[400px] right-0 top-0 bottom-0 transition-all duration-700 ${!isCart && "translate-x-full"}`}>
                <h2 className="py-10 bg-red-500 text-white text-2xl font-semibold text-center">Carrito</h2>

                <div className="px-4 py-4">
                    {
                        cartProduct.map(cart => (
                            <div key={cart.product.id} className="flex">
                                <figure className="relative size-28 border">
                                    <Image
                                        src={cart.product.image}
                                        alt={cart.product.description}
                                        fill
                                        className="object-cover"
                                    />
                                </figure>

                                <div>
                                    <h3>{cart.product.title}</h3>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
