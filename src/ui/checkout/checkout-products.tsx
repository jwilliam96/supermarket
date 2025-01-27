
"use client"

import { currencyFormat } from "@/utils/currencyFormat"
import { SkeletonProductCheckout } from "@/components"
import { useEffect, useState } from "react"
import { cartStore } from "@/store"
import Image from "next/image"

export function CheckoutProducts() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])


    const products = cartStore(state => state.cartState)

    return (
        <div>
            {
                isLoading ? (
                    Array.from({ length: 3 }, (_, i) => (
                        <SkeletonProductCheckout key={i} />
                    ))
                ) :
                    products.slice().reverse().map(product => (
                        <div key={product.product.id} className=" flex gap-6 items-center mb-2 shadow-lg">
                            <figure className="w-[100px] h-[100px] relative shrink-0">
                                <Image
                                    src={product.product.image}
                                    alt={product.product.description}
                                    sizes="(max-width: 1600px) w-[100px]"
                                    className="object-cover mx-2"
                                    fill
                                />
                            </figure>

                            <div className="">
                                <h2 className="md:text-xl font-medium mb-2">{product.product.title} <span>{`(${product.quantity})`}</span></h2>
                                <p className="font-bold md:text-xl text-green-700">{currencyFormat(product.product.price)}</p>

                            </div>
                        </div>
                    ))
            }
        </div>
    )
}
