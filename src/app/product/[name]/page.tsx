import { getProductById } from "@/actions";


export default async function ProductPage({ params }: { params: { name: string } }) {

    // const product = initialData.productsData.filter(p => p.title === params.name.replace(/_/g, " "))

    const product = await getProductById(params.name)

    return (
        <div className="min-h-screen">
            <h1>Hello Page</h1>

            <p>{params.name}</p>
        </div>
    );
}