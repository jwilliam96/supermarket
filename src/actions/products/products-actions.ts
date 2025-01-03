
"use server"

import { Product } from "@/interface"
import prisma from "@/lib/prisma"
import { notFound, redirect } from "next/navigation";

export const getProducts = async (): Promise<Product[]> => {
    // Obtener productos con categorías y subCategorías relacionadas
    const products = await prisma.product.findMany({
        include: {
            category: { select: { category: true } },
            subCategory: { select: { subcategory: true } },
        },
    });

    if (!products.length) return [];

    // Crear un mapa para agrupar productos por subCategoría
    const productsBySubcategory = products.reduce((acc, product) => {
        const subCategoryId = product.subCategoryId;
        if (!acc[subCategoryId]) acc[subCategoryId] = [];
        acc[subCategoryId].push(product);
        return acc;
    }, {} as Record<string, Product[]>);


    // Identificar el producto más vendido por subCategoría
    Object.values(productsBySubcategory).forEach((productGroup) => {
        const mostSold = productGroup.sort((a, b) => b.ventas - a.ventas)[0];
        if (mostSold) mostSold.masVendido = true;
    });

    return products;
};

export const getProductsByCategories = async (category: string) => {

    try {

        const products = (await getProducts()).filter(product => product.category?.category === category)

        return products

    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}

export const getProductById = async (productId: string) => {

    try {
        const product = (await getProducts()).find(product => product.id === productId)

        if (!product) {
            redirect(notFound())
        }

        return product
    } catch (error) {
        throw new Error(`hubo un error ${error}`)
    }

}