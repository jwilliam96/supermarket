"use client"

import { cartStore } from "@/store/cartStore"
import Image from "next/image"
import { IconDelete } from "../icons/Icons"
import Link from "next/link"


export function CartProducts() {

    const cartProduct = cartStore(state => state.cartState)
    const deleteCart = cartStore(state => state.deleteCart)
    const incrementQuantity = cartStore(state => state.addCart)
    const decrementQuantity = cartStore(state => state.decrementCart)

    return (
        <div className="px-4 grow overflow-auto">
            {/* PRODUCTOS  */}
            {
                cartProduct.slice().reverse().map(cart => (
                    <div key={cart.product.id} className="flex items-center py-4 border-b ">
                        <figure className="relative w-[100px] min-h-[100px] shrink-0 ">
                            <Image
                                src={cart.product.image}
                                alt={cart.product.description}
                                fill
                                className="object-cover"
                            />
                        </figure>

                        <div className="px-4 grow space-y-2">
                            <Link href={`/product/${cart.product.id}`} className="underline block">{cart.product.title}</Link>
                            <span className={`text-xl ${cart.product.offer ? "text-red-500/70 italic line-through mr-2" : "text-green-700"}`}>$ {cart.product.price}</span>
                            {cart.product.offer && <span className="text-green-700 text-xl">  ${(cart.product.price - (cart.product.price * 0.20)).toFixed(2)}</span>}

                            <div className='flex items-center gap-2'>
                                <button className=' bg-gray-800 px-2.5 py-[1px] rounded-full text-white' onClick={() => decrementQuantity(cart.product, 1)}>-</button>
                                <span className='border px-7'>{cart.quantity}</span>
                                <button className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white' onClick={() => incrementQuantity(cart.product, 1)}>+</button>
                            </div>
                        </div>
                        <div onClick={() => deleteCart(cart.product.id)} className="cursor-pointer">
                            <IconDelete className="text-red-500" />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
