import { Category, Product, SubCategory } from "@prisma/client"
import { useEffect, useState } from "react"



interface TypeProducts {
  products: Product[]
  categories: Category[]
  subCategory: SubCategory[]
}

export const useProducts = () => {


  const [productsData, setProducts] = useState<TypeProducts>()

  useEffect(() => {

    async function getProducts() {
      const data = await fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .catch(err => console.log(err))

      setProducts(data)
    }

    getProducts()

  }, [])

  const masVendidos: Product[] = []

  if (productsData) {

    const { categories, products, subCategory } = productsData


    const filterVentas = (subcategory: string) => {


      const filterSubCategoryId: SubCategory[] = subCategory.filter(s => s.subcategory === subcategory)

      const productsBySubCategory = products.filter(p => p.subCategoryId === filterSubCategoryId[0].id)

      const ordenadosPorVentas = productsBySubCategory.sort((a: any, b: any) => b.ventas - a.ventas);

      const mayorVenta = ordenadosPorVentas[0]

      masVendidos.push(mayorVenta)

    }

    subCategory.map(c => {
      filterVentas(c.subcategory)
    })

  }

  return [productsData, masVendidos]

}
