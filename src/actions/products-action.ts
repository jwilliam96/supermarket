"use server"

import prisma from "@/lib/prisma"
import { notFound, redirect } from "next/navigation";


// GET PRODUCTOS
export const getProducts = async () => {
    const products = await prisma.product.findMany()

    const convertedProducts = products.map(product => ({
        ...product,
        price: product.price.toNumber(), // Convierte Decimal a number
    }));

    if (!convertedProducts) {
        redirect(notFound())
    }

    return convertedProducts

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

    const product = {
        ...products,
        price: products.price.toNumber(), // Convierte Decimal a number
    }

    return product
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

// GET CATEGORY
export const getCategory = async () => {
    try {
        const category = await prisma.category.findMany()

        return category

    } catch (error) {
        console.log("hubo un error", error)
    }
}