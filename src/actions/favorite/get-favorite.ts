"use server"

import prisma from "@/lib/prisma"


export const getFavorite = async () => {

    const favorites = await prisma.favorite.findMany()


    return favorites
}

