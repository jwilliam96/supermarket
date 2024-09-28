"use client"

import { IoIosArrowForward } from "react-icons/io"
import { Button, IconDelete } from "@/components"
import { cartStore } from "@/store/cartStore"
import Image from "next/image"


export default function CartModal() {

    const cartProduct = cartStore(state => state.cartState)
    const changeCart = cartStore(state => state.changeCart)
    const isCart = cartStore(state => state.isCart)
    const deleteCart = cartStore(state => state.deleteCart)
    const incrementQuantity = cartStore(state => state.addCart)
    const decrementQuantity = cartStore(state => state.decrementCart)

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

                <div className="px-4 py-4 grow overflow-auto">
                    {/* PRODUCTOS  */}
                    {
                        cartProduct.slice().reverse().map(cart => (
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

                {/* SUBTOTAL  */}
                <div className="px-6 pt-6 ">
                    <p className="text-3xl font-bold text-gray-700">Subtotal: <span className="text-3xl font-semibold text-green-700">$ {subTotal.toFixed(2)}</span></p>


                    <div >
                        <Button text="Ver carrito" className="w-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}
