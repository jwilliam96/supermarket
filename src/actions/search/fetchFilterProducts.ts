"use server"

import { getProducts } from "../products/get-products";
import { Product } from "@/interface";


export async function fetchFilterProducts(query: string): Promise<Product[]> {

    const products: Product[] = await getProducts()
    const legumbres = "legumbres"

    const filterProducts = products.filter(product => {
        if ("legumbres".includes(query.toLowerCase())) {
            return product.subCategory?.subcategory === "vegetales"
        }
        return product.title.includes(query.toLowerCase())
            ||
            product.category?.category.includes(query.toLowerCase())
            ||
            product.subCategory?.subcategory.includes(query.toLowerCase())
    })


    if (!filterProducts) {
        return []
    }

    return filterProducts
}