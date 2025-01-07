"use server"

import { getProducts } from "./products-actions";
import { SubCategories } from "@/interface"
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma"

export const getSubcategories = async (): Promise<SubCategories[]> => {

    try {

        const subcategories = await prisma.subCategory.findMany()

        return subcategories ?? []

    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}

export const getSubcategoryName = async (name: string) => {
    if (!name.trim()) {
        throw new Error("Nombre del parámetro de subcategory es requerido")
    }

    const convertedName = name.trim().toLowerCase();

    const products = await getProducts()

    const filterBySubcategory = products.filter(product => product.subCategory?.subcategory === convertedName)

    if (filterBySubcategory.length === 0) {
        throw notFound()
    }

    return filterBySubcategory;
};