
"use server"

import { notFound } from "next/navigation";
import { Product } from "@/interface"
import prisma from "@/lib/prisma"
import { cache } from "react";

export const getProducts = cache(async (): Promise<Product[]> => {
    // Obtener productos con categorías y subCategorías relacionadas
    const products = await prisma.product.findMany({
        include: {
            category: { select: { category: true } },
            subCategory: { select: { subcategory: true } },
        },
    });

    if (!products) return [];

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
})

export const getProductsByCategories = async (category: string) => {

    if (!category) {
        return { ok: false, message: "categoría invalida", categories: [] }
    }

    try {
        const products = await getProducts();

        if (!products) {
            return { ok: false, message: "productos no encontrados", categories: [] }
        }

        const filteredProducts = products.filter(product =>
            product.category?.category.toLowerCase() === category.toLowerCase()
        );

        return { ok: true, categories: filteredProducts }

    } catch (error) {
        return { ok: false, message: "hubo un error", categories: [] }
    }
}


export const getProductById = async (productId: string) => {

    const products = await getProducts();

    const product = products.find(product => product.id === productId);

    if (!product) {
        throw notFound(); // Usar notFound directamente si es una excepción
    }

    return product;

}