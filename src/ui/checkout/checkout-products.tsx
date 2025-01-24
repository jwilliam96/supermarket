
"use client"

import { SkeletonProductCart } from "@/components"
import { cartStore } from "@/store"
import { currencyFormat } from "@/utils/currencyFormat"
import Image from "next/image"
import { useEffect, useState } from "react"

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
                        <SkeletonProductCart key={i} />
                    ))
                ) :
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
