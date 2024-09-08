import { getProductById } from "@/actions";
import { Product } from "@/interface";


export default async function ProductPage({ params }: { params: { name: string } }) {

    const product: Product = await getProductById(params.name)

    return (
        <div className="min-h-screen">
            <h1>Hello Page</h1>

            <p>{product.title}</p>
        </div>
    );
}