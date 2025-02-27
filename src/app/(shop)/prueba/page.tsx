import { getProducts } from "@/actions";
import { CardImagesProducts, SwiperProducts } from "@/components";

export default async function Prueba() {

    const products = await getProducts()

    const filterProducts = products.slice(0, 5)

    return (
        <div className="max-w-[1600px] mx-auto px-4">
            <h2 className="text-3xl mb-10">Page Prueba</h2>

            <SwiperProducts >
                {
                    filterProducts.map(product => (
                        <CardImagesProducts key={product.id} src={product.image} alt={product.description} />
                    ))
                }
            </SwiperProducts>
        </div>
    )
}
