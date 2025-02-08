"use server"

import { getProducts } from "../products/get-products";
import { Product } from "@/interface";


export async function fetchFilterProducts(query: string): Promise<Product[]> {

    const products: Product[] = await getProducts()

    const filterProducts = products.filter(product => {

        if ("legumbres".includes(query.toLowerCase())) {
            return product.subCategory?.subcategory === "vegetales"
        }

        return product.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            .includes(query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
            ||
            product.category?.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .includes(query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
            ||
            product.subCategory?.subcategory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .includes(query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
    })


    if (!filterProducts) {
        return []
    }

    return filterProducts
}