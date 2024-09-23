"use client"

import { useCounter } from "@/hook/useCounter";
import { IconCarrito } from "./icons/Icons";
import { Product } from "@/interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product
    ventas?: Product[] | undefined
}

export function CardProduct({ product, ventas }: Props) {

    const { counter, handleIncrement, handleDecrement } = useCounter()

    return (

        <article className="border border-gray-400 relative cursor-pointer max-w-[350px]">

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
            <Link href={`/product/${product.id}`}>
                <Image className="w-full h-[300px]  object-cover " src={product.image} width={300} height={200} alt='producto' />
            </Link>

            {/* DESCRIPTION  */}
            <div className='px-4'>
                <h3 className='line-clamp-1'>{product.title}</h3>

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

                {/* BUTTON  */}
                <div className="flex justify-center gap-4 my-4 mb-6 py-2 bg-red-500 text-white w-full rounded-full hover:bg-red-700 ">
                    <button className=''>Añadir</button>
                    <IconCarrito size={20} />
                </div>
            </div>
        </article>
    )
}
