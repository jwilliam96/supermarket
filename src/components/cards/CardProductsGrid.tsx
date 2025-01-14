"use client"

import { CardProduct } from "./CardProduct"
import { Product } from "@/interface"

interface Props {
    products: Product[]
}

export function CardProductsGrid({ products }: Props) {


    return (
        <>
            <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mt-20 xl:grid-cols-5">
                {
                    products.map(product => (
                        <CardProduct product={product} key={product.id} />
                    ))
                }
            </div>

        </>
    )
}
