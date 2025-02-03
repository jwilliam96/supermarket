import { notFound, redirect } from "next/navigation";
import { getSubcategoryName, paginationProduct } from "@/actions";
import { CardProductsGrid, PaginationButton } from "@/components";

interface Props {
    params: { name: string };
    searchParams: { page?: string };
}

export default async function CategoryPage({ params, searchParams }: Props) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1
    const filterProduct = decodeURIComponent(params.name)
    const subCategories = await getSubcategoryName(filterProduct)

    const { products, currentPage, totalPage } = await paginationProduct({ products: subCategories, page })


    if (!products) {
        redirect(notFound())
    }

    return (
        <div className="max-w-[1600px] mx-auto px-6">

            <h2 className="my-10 text-5xl lg:text-7xl text-center font-semibold">{filterProduct}</h2>

            <CardProductsGrid products={products} />

            <PaginationButton currentPage={currentPage} totalPages={totalPage} url={params.name} />
        </div>
    );
}