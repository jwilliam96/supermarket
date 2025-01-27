"use client"

import { cartStore } from "@/store/cart-store"
import { IconDelete } from "../icons/Icons"
import Image from "next/image"
import Link from "next/link"
import { SkeletonProductCart } from "../skeleton/productCart-skeleton"
import { useEffect, useState } from "react"

export function CartProducts() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])


    const cartProduct = cartStore(state => state.cartState)
    const deleteCart = cartStore(state => state.deleteCart)
    const incrementQuantity = cartStore(state => state.addCart)
    const decrementQuantity = cartStore(state => state.decrementCart)

    return (
        < >
            {/* PRODUCTOS  */}
            {
                cartProduct.length === 0 ? (
                    isLoading ? (
                        Array.from({ length: 3 }, (_, i) => <SkeletonProductCart key={i} />)
                    ) : (
                        <div className="h-full flex justify-center items-center">
                            <p className="text-5xl text-gray-500 italic mb-10 text-center">No hay productos en el carrito</p>
                        </div>
                    )
                ) : (
                    <div className="px-4 grow overflow-auto shadow-lg ">
                        {
                            cartProduct.slice().reverse().map(cart => (
                                <div key={cart.product.id} className="flex items-center py-5 border-b ">
                                    <figure className="relative w-[100px] min-h-[100px] shrink-0 ">
                                        <Image
                                            src={cart.product.image}
                                            alt={cart.product.description}
                                            className="object-cover"
                                            fill
                                            sizes="(max-w: 1600px) 100px"
                                            priority
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

        </>
    )
}
