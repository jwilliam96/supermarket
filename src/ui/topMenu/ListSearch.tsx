"use client"

import { fetchFilterProducts } from "@/actions";
import { Product } from "@/interface";
import Image from "next/image";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export function ListSearch() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    const [result, setResult] = useState<Product[]>([])

    useEffect(() => {
        const filterProducts = async (query: string) => {
            const data = await fetchFilterProducts(query)

            setResult(data)
        }
        filterProducts(query ?? "")
    }, [query]);

    return (
        <div className="absolute left-0 right-0 bg-blue-300 rounded-md z-50">
            {/* {result.map(product => (
                <div key={product.id} className="flex gap-4">
                    <Image src={product.image} width={50} height={50} alt={product.title} />
                    <div>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))} */}
        </div>
    )
}
