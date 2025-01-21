"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface Props {
    id: string
}

export const addFavorite = async ({ id }: Props) => {

    // try {
    //     const favorite = await prisma.favorite.findFirst({ where: { productId: id } })

    //     if (favorite) {
    //         await prisma.favorite.deleteMany({ where: { productId: id } })
    //         return
    //     }

    //     await prisma.favorite.create({ data: { productId: id } })

    // } catch (error) {
    //     console.log({ message: `hubo un error ${error}` })
    // }

    // finally {
    //     revalidatePath("/favorite")
    // }

}