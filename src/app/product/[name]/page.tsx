import { productsData } from "@/seed/productData";


export default function ProductPage({ params }: { params: { name: string } }) {

    const product = productsData.filter(p => p.title === params.name.replace(/_/g, " "))

    return (
        <div className="min-h-screen">
            <h1>Hello Page</h1>

            <p>{product[0].title}</p>
        </div>
    );
}