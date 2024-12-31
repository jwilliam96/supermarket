"use server"

import prisma from "@/lib/prisma"

interface SubCategories {
    id: string;
    subcategory: string;
    categoryId: string;
}

export const getSubcategories = async (): Promise<SubCategories[]> => {

    try {

        const subcategories = await prisma.subCategory.findMany()

        return subcategories ?? []

    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}