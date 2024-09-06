"use client"

import Image from "next/image";
import Link from "next/link";
import { useCounter } from "@/hook/useCounter";
import { Product } from "@/interface";

interface Props {
    product: Product
    ventas?: Product[] | undefined
}

export function CardProduct({ product, ventas }: Props) {

    const { counter, handleIncrement, handleDecrement } = useCounter()

    product.title = product.title.replace(/ /g, "_")

    return (

        <article className="border border-gray-400 relative cursor-pointer ">

            {/* ETIQUETAS  */}
            {/* MEJORES OFERTAS  */}
            {
                product.offer && (
                    <span className="bg-red-500 text-white text-xl py-1 px-4 absolute top-0 left-0">Mejor oferta</span>
                )
            }
            {
                ventas?.map(v => {
                    if (product.id === v.id) {
                        return <span key={v.id} className="bg-red-500 text-white text-xl py-1 px-4 absolute top-0 left-0">Más vendido</span>
                    }
                })
            }

            {/* IMAGEN } */}
            <Link href={`/product/${product.title}`}>
                <Image className="w-full h-[300px]  object-cover " src={product.image} width={300} height={200} alt='producto' />
            </Link>

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
                    <button onClick={handleDecrement} className=' bg-gray-800 px-2.5 rounded-full text-white'>-</button>
                    <span className='border px-7'>{counter}</span>
                    <button onClick={handleIncrement} className=' bg-gray-800 px-2 pb-0.5 rounded-full text-white'>+</button>
                </div>

                <Link href={`/product/${product.title}`}>
                    <button className='my-4 mb-6 py-2 bg-red-500 text-white w-full rounded-full hover:bg-red-700'>Comprar</button>
                </Link>
            </div>
        </article>
    )
}
