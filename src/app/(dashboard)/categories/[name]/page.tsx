import { getSubcategoryName } from "@/actions/products-action";
import { categoryPopular } from "@/utils/helps";
import { notFound, redirect } from "next/navigation";

export default async function CategoryPage({ params }: { params: { name: string } }) {

    const subcategory = categoryPopular.find(category => category.url === params.name)

    if (!subcategory) {
        redirect(notFound())
    }

    const subCategories = await getSubcategoryName(subcategory?.title)

    return (
        <div>
            {
                subCategories.map(product => (
                    <p key={product.id}>{product.title}</p>
                ))
            }
        </div>
    );
}