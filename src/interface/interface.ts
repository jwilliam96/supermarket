
export interface Product {
    id: string
    image: string
    title: string
    description: string
    categoryId: string
    subCategoryId: string
    offer: boolean
    price: number
    stock: number
    ventas: number
}

export type Categories = "comida" | "bebidas" | "limpieza y hogar" | "cuidado personal"

export type SubCategory = "vegetales" | "panadería" | "vinos" | "lácteos y huevos" | "carnes y aves" | "bebidas sin alcohol" | "productos de limpieza" | "cereales y botanas" | "frutas" | "pescados y mariscos" | "pastas y granos" | "té" | "café" | "cervezas" | "casa y cocina" | "higiene personal" | "bebés"