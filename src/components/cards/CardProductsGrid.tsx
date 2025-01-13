"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { CardProduct } from "./CardProduct"
import { Product } from "@/interface"
import { PaginationButton } from "../pagination/pagination-button"

interface Props {
    products: Product[]
}

export function CardProductsGrid({ products }: Props) {

    const pathName = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get("page"))

    return (
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mt-20 xl:grid-cols-5">
            {
                products.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))
            }

            <PaginationButton currentPage={currentPage} totalPages={8} url={pathName} />
        </div>
    )
}
