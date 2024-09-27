"use client"

import { IconDelete } from "@/components"
import { cartStore } from "@/store/cartStore"
import Image from "next/image"


export default function CartModal() {

    const cartProduct = cartStore(state => state.cartState)
    const changeCart = cartStore(state => state.changeCart)
    const isCart = cartStore(state => state.isCart)
    const deleteCart = cartStore(state => state.deleteCart)

    return (
        <div>

            {/* FONDO NEGRO  */}
            <div
                className={`fixed backdrop-filter backdrop-blur-sm bg-black/70 inset-0  z-[70] cursor-pointer ${!isCart && "hidden"}`}
                onClick={changeCart} />

            <div className={`fixed z-[80] bg-white w-[400px] right-0 top-0 bottom-0 transition-all duration-700 ${!isCart && "translate-x-full"}`}>
                <h2 className="py-10 bg-red-500 text-white text-2xl font-semibold text-center">Carrito</h2>

                <div className="px-4 py-4  ">
                    {
                        cartProduct.map(cart => (
                            <div key={cart.product.id} className="flex items-center py-4 border-b">
                                <figure className="relative w-[100px] min-h-[100px] shrink-0 ">
                                    <Image
                                        src={cart.product.image}
                                        alt={cart.product.description}
                                        fill
                                        className="object-cover"
                                    />
                                </figure>

                                <div className="px-4 grow space-y-2">
                                    <h3>{cart.product.title}</h3>
                                    <p className="text-xl text-green-700">$ {cart.product.price}</p>

                                    <div className='flex items-center gap-2'>
                                        <button className=' bg-gray-800 px-2.5 py-[1px] rounded-full text-white'>-</button>
                                        <span className='border px-7'>{cart.quantity}</span>
                                        <button className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white'>+</button>
                                    </div>
                                </div>
                                <div onClick={() => deleteCart(cart.product.id)} className="cursor-pointer">
                                    <IconDelete className="text-red-500" />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
