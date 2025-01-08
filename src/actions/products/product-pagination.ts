"use server"

import { Product } from "@/interface"

interface Pagination {
    products: Product[]
    page?: number
    take?: number
}

export const paginationProduct = async ({ page = 1, take = 10, products }: Pagination) => {

    if (isNaN(Number(page))) page = 1
    if (page < 1) page = 1

    const skip = page * take

    const pagination = products.slice((page - 1) * skip, skip)

    return pagination

}