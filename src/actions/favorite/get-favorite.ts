"use server"

import { Product } from "@/interface"
import prisma from "@/lib/prisma"


export const getFavorite = async (): Promise<Product[]> => {

    const favorites = await prisma.favorite.findMany({
        select: { product: true }
    })

    if (!favorites) null

    const favorite = favorites.map(f => f.product)

    return favorite
}

