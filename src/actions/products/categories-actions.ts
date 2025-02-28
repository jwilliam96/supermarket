
"use server"

import { Category } from "@/interface"
import prisma from "@/lib/prisma"
import { cache } from "react"

export const getCategories = cache(async (): Promise<Category[]> => {

    try {

        const categories = await prisma.category.findMany()

        return categories ?? []

    } catch (error) {

        throw new Error(`hubo un error ${error}`)
    }

})