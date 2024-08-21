"use server"

import prisma from "@/lib/prisma"
import { Category, Product, SubCategory } from "@prisma/client"


interface Props {
    products: Product[]
    categories: Category[]
    subCategory: SubCategory[]
}

export const getProducts = async (): Promise<Props | undefined> => {

    try {

        const products = await prisma.product.findMany()
        const categories = await prisma.category.findMany()
        const subCategory = await prisma.subCategory.findMany()

        return { products, categories, subCategory }

    } catch (error) {

    }

}