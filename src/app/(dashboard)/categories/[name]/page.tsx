import { getSubcategoryName } from "@/actions/products-action";
import { CardProduct } from "@/components";
import { categoryPopular } from "@/utils/helps";
import { notFound, redirect } from "next/navigation";

export default async function CategoryPage({ params }: { params: { name: string } }) {

    const subcategory = categoryPopular.find(category => category.url === params.name)

    if (!subcategory) {
        redirect(notFound())
    }

    const subCategories = await getSubcategoryName(subcategory?.title)

    return (
        <div className="max-w-[1600px] mx-auto ">

            <h2 className="my-6 text-7xl text-center font-semibold">{subcategory.title}</h2>

            <div className="grid grid-cols-5 gap-8">
                {
                    subCategories.map(product => (
                        <CardProduct product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}