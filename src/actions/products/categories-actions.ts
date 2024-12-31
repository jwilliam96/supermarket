
"use server"

import prisma from "@/lib/prisma"

interface Categories {
    id: string,
    category: string
}

export const getCategories = async (): Promise<Categories[]> => {

    try {

        const categories = await prisma.category.findMany()

        return categories ?? []

    } catch (error) {

        throw new Error(`hubo un error ${error}`)
    }

}