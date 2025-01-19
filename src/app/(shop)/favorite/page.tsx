import { CardProductsGrid, PaginationButton, SvgFavorite } from "@/components";
import { getFavorite, paginationProduct } from "@/actions";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth-config";
import Link from "next/link";

interface Props {
    searchParams: { page?: string };
}


export default async function FavoritePage({ searchParams }: Props) {
    const session = await auth()

    if (!session) {
        redirect("/auth/login")
    }

    const favorites = await getFavorite()
    const page = searchParams.page ? parseInt(searchParams.page) : 1
    const { products, currentPage, totalPage } = await paginationProduct({ products: favorites, page })

    if (!products) {
        redirect(notFound())
    }

    return (
        <div className="max-w-[1600px] mx-auto px-4">
            <h1 className="text-5xl my-8 font-semibold">Favoritos</h1>

            {
                favorites.length === 0 ? (
                    <div className="flex flex-col items-center my-14 ">
                        <SvgFavorite className="h-72" />
                        <p className="text-3xl mt-6 text-gray-600 text-center">No hay productos agregados en favoritos</p>
                        <Link href={"/"} className="text-red-500 underline underline-offset-4 text-xl my-2">sigue comprando</Link>
                    </div>
                ) : (
                    <div>
                        <CardProductsGrid products={products} />
                        <PaginationButton currentPage={currentPage} totalPages={totalPage} url={"/favorite"} />
                    </div>
                )
            }
        </div>
    );
}