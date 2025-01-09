"use server"

import { Product } from "@/interface"

interface ParamsPagination {
    products: Product[]
    page?: number
    take?: number
}

interface Pagination {
    products: Product[]
    totalPage: number
    currentPage: number
}

export const paginationProduct = async ({ page = 1, take = 10, products }: ParamsPagination): Promise<Pagination> => {

    if (isNaN(Number(page))) page = 1
    if (page < 1) page = 1

    const totalPage = Math.ceil(products.length / take)
    const skip = page * take

    const pagination = products.slice((page - 1) * take, skip)

    if (pagination.length === 0) {
        return { products: products.slice(0, take), currentPage: 1, totalPage }
    }

    return { products: pagination, currentPage: page, totalPage }

}