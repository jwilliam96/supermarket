"use server"

import prisma from "@/lib/prisma"

// GET PRODUCTOS
export const getProducts = async () => {

    try {
        const products = await prisma.product.findMany()

        const convertedProducts = products.map(product => ({
            ...product,
            price: product.price.toNumber(), // Convierte Decimal a number
            ventas: product.ventas.toNumber(),
        }));

        return convertedProducts

    } catch (error) {
        console.error("Error fetching data:", error)
    }

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