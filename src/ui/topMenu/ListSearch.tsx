"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { currencyFormat } from "@/utils/currencyFormat";
import { fetchFilterProducts } from "@/actions";
import { useEffect, useState } from "react";
import { Product } from "@/interface";
import Image from "next/image";

export function ListSearch() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const router = useRouter()

    const [result, setResult] = useState<Product[] | null>([])

    useEffect(() => {
        const filterProducts = async (query: string) => {
            const data = await fetchFilterProducts(query)

            setResult(data)
        }
        if (query) {
            filterProducts(query)
        }
    }, [query]);

    const newUrl = (productId: string) => {
        router.push(`/product/${productId}`)
    }

    return (
        <>
            {query && (
                <div className="absolute left-0 right-0 bg-white border-2 border-gray-400 rounded-md z-[100] p-2 max-h-[600px] overflow-y-auto">
                    {
                        result?.length === 0 ? (
                            <div className=" text-gray-500 pl-4 py-2 italic"> Sin Resultados...</div>
                        ) :
                            result?.map((product, i) => (
                                <>
                                    <div
                                        key={`${product.id}-${i}`}
                                        onClick={() => newUrl(product.id)}
                                        className="flex gap-4 mb-2 cursor-pointer"
                                    >
                                        <figure>
                                            <Image src={product.image} width={70} height={70} alt={product.title} className="object-cover h-[70px]" />
                                        </figure>
                                        <div className="space-y-2">
                                            <p className="capitalize text-black">
                                                {product.title}
                                            </p>
                                            <p className="font-bold text-green-700">{currencyFormat(product.price)}</p>
                                        </div>

                                    </div>
                                    <div className="h-0.5 bg-gray-200 rounded-full mx-4 my-3" />
                                </>
                            ))}
                </div>
            )}
        </>
    )
}
