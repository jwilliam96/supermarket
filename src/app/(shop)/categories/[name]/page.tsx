import { notFound, redirect } from "next/navigation";
import { getSubcategoryName } from "@/actions";
import { CardProductsGrid } from "@/components";

export default async function CategoryPage({ params }: { params: { name: string } }) {

    const filterProduct = decodeURIComponent(params.name)

    const subCategories = await getSubcategoryName(filterProduct)

    if (!subCategories) {
        redirect(notFound())
    }

    return (
        <div className="max-w-[1600px] mx-auto px-6">

            <h2 className="my-10 text-5xl lg:text-7xl text-center font-semibold">{filterProduct}</h2>

            <CardProductsGrid products={subCategories} />
        </div>
    );
}