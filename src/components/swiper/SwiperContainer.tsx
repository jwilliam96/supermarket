import { getProducts, getSubcategory } from "@/actions"
import { SwiperCard } from "./SwiperCard"
import { Product } from "@/interface"


interface Props {
    filterProduct: "all" | "offer" | "ventas" | "frescura"
}

export async function SwiperContainer({ filterProduct }: Props) {

    const products: Product[] = await getProducts()
    const subCategories = await getSubcategory()

    // MAS VENDIDOS
    const masVendido: Product[] = []

    if (subCategories && products) {
        subCategories.map(sub => {
            const filterBySubcategory = products.filter(product => product.subCategoryId === sub.id)
            const ordenadosPorVentas = filterBySubcategory.sort((a, b) => b.ventas - a.ventas);
            const mayorVenta = ordenadosPorVentas[0]
            masVendido.push(mayorVenta)
        })
    }

    // MEJORES OFERTAS
    const offerProducts = products?.filter(p => p.offer === true)

    // VERDURAS Y FRUTAS
    const idFrescuras = subCategories?.filter(s => ["vegetales", "frutas"].includes(s.subcategory)).map(f => f.id);

    const frescura = products?.filter(p => idFrescuras?.includes(p.subCategoryId));


    return (
        <>
            {/* OFERTAS */}
            {
                filterProduct === "offer" && (
                    <SwiperCard products={offerProducts} />
                )
            }

            {/* MEJORES VENTAS  */}
            {
                filterProduct === "ventas" && (
                    <SwiperCard products={masVendido} ventas={masVendido} />
                )
            }

            {/* TODO  */}
            {
                filterProduct === "all" && (
                    <SwiperCard products={products} ventas={masVendido} />
                )
            }

            {/* FRESCURA  */}
            {
                filterProduct === "frescura" && (
                    <SwiperCard products={frescura} ventas={masVendido} />
                )
            }
        </>
    )
}
