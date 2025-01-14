"use server"

import { Product } from "@/interface"
import prisma from "@/lib/prisma"


export const getFavorite = async (): Promise<Product[]> => {

    const favorites = await prisma.favorite.findMany({
        select: { product: true }
    })

    if (!favorites) return []

    const favorite = favorites.map(f => f.product)

    return favorite
}

export const getFavoriteById = async (id: string): Promise<boolean> => {

    const validateProduct = await prisma.favorite.findFirst({ where: { productId: id } })

    return !validateProduct ? false : true

}