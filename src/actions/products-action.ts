"use server"

import prisma from "@/lib/prisma"
import { notFound, redirect } from "next/navigation";


// GET SUBCATEGORY NAME
export const getSubcategoryName = async (name: string) => {

    const convertedName = name.toLowerCase()

    const subCategories = await prisma.subCategory.findUnique({ where: { subcategory: convertedName } })

    const products = await prisma.product.findMany({ where: { subCategoryId: subCategories?.id } })

    if (!subCategories) {
        redirect(notFound())
    }

    return products

}
