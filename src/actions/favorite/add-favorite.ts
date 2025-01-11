"use server"

import prisma from "@/lib/prisma"

interface Props {
    id: string
}

export const addFavorite = async ({ id }: Props) => {

    const products = await prisma.product.findUnique({ where: { id } })

}