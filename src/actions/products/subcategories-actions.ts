"use server"

import { SubCategories } from "@/interface"
import prisma from "@/lib/prisma"

export const getSubcategories = async (): Promise<SubCategories[]> => {

    try {

        const subcategories = await prisma.subCategory.findMany()

        return subcategories ?? []

    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}