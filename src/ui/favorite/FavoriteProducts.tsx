"use client"

import { CardProductsGrid, SvgFavorite } from "@/components"
import { useFavoriteState } from "@/store"
import Link from "next/link"


export function FavoriteProducts() {

    const favorites = useFavoriteState(state => state.favorites)

    return (
        <div>

            {
                favorites.length === 0 ? (
                    <div className="flex flex-col items-center my-14 ">
                        <SvgFavorite className="h-72" />
                        <p className="text-3xl mt-6 text-gray-600 text-center">No hay productos agregados en favoritos</p>
                        <Link href={"/"} className="text-red-500 underline underline-offset-4 text-xl my-2">sigue comprando</Link>
                    </div>
                ) : (
                    <div>
                        <CardProductsGrid products={favorites} />
                    </div>
                )
            }

        </div>
    )
}
