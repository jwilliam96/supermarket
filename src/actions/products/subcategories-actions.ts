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

    const convertedName = name.trim().toLowerCase();
    const products = await getProducts();

    if (convertedName === "todos") {
        return products
    }

    const filters: Record<string, (product: any) => boolean> = {
        "ofertas": (product) => product.offer,
        "más vendido": (product) => product.masVendido,
        "verduras y frutas": (product) =>
            ["vegetales", "frutas"].includes(product.subCategory?.subcategory || "")
    };

    if (filters[convertedName]) {
        const filteredProducts = products.filter(filters[convertedName]);
        return filteredProducts;
    }

    // Filtro por categorías y subCategorías
    const filteredByCategories = products.filter(product =>
        product.subCategory?.subcategory?.toLowerCase() === convertedName ||
        product.category?.category?.toLowerCase() === convertedName
    );

    if (filteredByCategories.length === 0) {
        throw notFound();
    }

    return filteredByCategories;
};