
"use server"

import prisma from "@/lib/prisma"


export const getProducts = async () => {

    try {
        const products = await prisma.product.findMany({
            include: {
                category: {
                    select: {
                        category: true
                    }
                },
                subCategory: {
                    select: {
                        subcategory: true
                    }
                },
            }
        })

        return products ?? []

    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}

export const getProductsByCategories = async (category: string) => {

    try {

        const products = await prisma.product.findMany({
            where: {
                category: {
                    category
                }
            },
            include: {
                category: {
                    select: {
                        category: true
                    }
                },
                subCategory: {
                    select: {
                        subcategory: true
                    }
                },
            }
        })

        return products ?? []

    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}

export const getProductById = async (productId: string) => {

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        })

        return product ?? {}
    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}