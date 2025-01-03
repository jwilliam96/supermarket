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
    category?: { category: string }
    subCategory?: { subcategory: string }
    masVendido?: boolean
}