
"use client"

import { cartStore } from "@/store"
import { currencyFormat } from "@/utils/currencyFormat"
import Image from "next/image"

export function CheckoutProducts() {

    const products = cartStore(state => state.cartState)

    return (
        <div>
            {
                products.map(product => (
                    <div key={product.product.id} className=" flex gap-6 items-center">
                        <figure className="w-[120px] h-[120px] relative">
                            <Image
                                src={product.product.image}
                                alt={product.product.description}
                                sizes="(max-width: 1600px) w-[100px]"
                                className="object-cover mx-2"
                                fill
                            />
                        </figure>

                        <div className="">
                            <h2 className="text-xl font-medium mb-2">{product.product.title} <span>{`(${product.quantity})`}</span></h2>
                            <p className="font-bold text-xl">{currencyFormat(product.product.price)}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}
