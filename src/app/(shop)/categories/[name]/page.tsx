import { notFound, redirect } from "next/navigation";
import { CardProduct } from "@/components";
import { Product } from "@/interface";
import { getSubcategoryName } from "@/actions";

export default async function CategoryPage({ params }: { params: { name: string } }) {

    const subcategory = decodeURIComponent(params.name)

    const subCategories = await getSubcategoryName(subcategory)

    if (!subCategories) {
        redirect(notFound())
    }

    return (
        <div className="max-w-[1600px] mx-auto px-6">

            <h2 className="my-10 text-5xl lg:text-7xl text-center font-semibold">{subcategory}</h2>

            <div className="grid justify-center lg:grid-cols-5 gap-8 mb-32 mt-20">
                {
                    subCategories.map(product => (
                        <CardProduct product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}