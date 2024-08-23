"use client"

import { initialData } from "@/seed/productData";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCounter } from "@/hook/useCounter";
import foto from "/public/products/agua.webp"
import { Product } from "@/interface";

interface Props {
    product: Product
}

export function CardProduct({ product }: Props) {

    // const { productsData } = initialData

    const { counter, handleIncrement, handleDecrement } = useCounter()


    // const filtroCategory = productsData.filter(p => p.subCategory === products.subCategory)

    // const ordenadosPorVentas = filtroCategory.sort((a, b) => b.ventas - a.ventas);

    // const mayorVenta = ordenadosPorVentas[0]


    return (

        <article className="border border-gray-400 relative cursor-pointer ">

            {/* ETIQUETA  */}
            {/* MEJORES OFERTAS  */}


            {/* IMAGEN } */}

            <Image className="w-full h-[300px]  object-cover " src={product.image} width={300} height={200} alt='producto' />

            {/* DESCRIPTION  */}

            <div className='px-4'>
                <h3 className=' line-clamp-1'>{product.title}</h3>

                <div className='text-xl py-2'>
                    {
                        product.offer ? (
                            <>
                                <span className='before:content-["$"] text-red-500 line-through'>{product.price}</span>
                                <span className='pl-4 text-green-700 before:content-["$"]'>{(product.price - (product.price * 0.20)).toFixed(2)}</span>
                            </>
                        ) : (
                            <span className='before:content-["$"] text-green-700 ' >{product.price}</span>
                        )
                    }
                </div>

                {/* CONTADOR  */}

                <div className='flex justify-between text-xl my-4 items-center gap-2'>
                    <button onClick={() => handleDecrement} className=' bg-gray-800 px-2.5 rounded-full text-white'>-</button>
                    <span className='border px-7'>{counter}</span>
                    <button onClick={handleIncrement} className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white'>+</button>
                </div>

                <button className='my-4 mb-6 py-2 bg-red-500 text-white w-full rounded-full hover:bg-red-700'>Comprar</button>
            </div>
        </article>
    )
}
