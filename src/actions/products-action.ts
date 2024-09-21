"use server"

import prisma from "@/lib/prisma"
import { notFound, redirect } from "next/navigation";


// GET PRODUCTOS
export const getProducts = async () => {
    const products = await prisma.product.findMany()

    return products

}

// GET PRODUCTS BY ID
export const getProductById = async (productId: string) => {

    // const convertedProduct = productId.replace(/_/g, " ")
    const products = await prisma.product.findFirst({
        where: { id: productId }
    })

    if (!products) {
        return notFound()
    }


    return products
}

// GET SUBCATEGORY
export const getSubcategory = async () => {
    try {
        const subCategory = await prisma.subCategory.findMany()

        return subCategory

    } catch (error) {
        console.log("hubo un error", error)
    }
}

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

// GET CATEGORY
export const getCategory = async () => {
    try {
        const category = await prisma.category.findMany()

        return category

    } catch (error) {
        console.log("hubo un error", error)
    }
}