"use server"

import { Product } from "@/interface";
import prisma from "@/lib/prisma";


export async function fetchFilterProducts(query: string): Promise<Product[]> {

    const products: Product[] = await prisma.product.findMany()

    const filterProducts = products.filter(product => product.title.includes(query))

    if (!filterProducts) {
        return []
    }

    return filterProducts
}