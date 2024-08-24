import { getCategory, getProducts, getSubcategory } from "@/actions/server-action"
import { SwiperCard } from "./SwiperCard"


export async function SwiperContainer() {

    const products = await getProducts()
    const categories = await getCategory()
    const subCategories = await getSubcategory()

    // MAS VENDIDOS
    const masVendido = []

    subCategories.map(sub => {
        const filterBySubcategory = products.filter(product => product.subCategoryId === sub.id)
        const ordenadosPorVentas = filterBySubcategory.sort((a, b) => b.ventas - a.ventas);
        const mayorVenta = ordenadosPorVentas[0]
        masVendido.push(mayorVenta)
    })

    console.log(masVendido)

    return (
        <SwiperCard products={masVendido} />
    )
}
