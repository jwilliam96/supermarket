

import { ButtonCounterAddCart } from "@/components";
import { Product } from "@/interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product
}

export function CardProduct({ product }: Props) {

    const { masVendido, offer, id, image, title, price, description } = product

    return (

        <article className="flex flex-col border border-gray-400 cursor-pointer max-w-[350px] h-[600px]  mb-6">

            {/* ETIQUETAS  */}
            {/* MEJORES OFERTAS  */}
            {
                masVendido ? (
                    <span className="bg-red-500 text-white text-xl py-1 px-4 absolute top-0 left-0">Mas vendido</span>
                ) :
                    offer ? (
                        <span className="bg-red-500 text-white text-xl py-1 px-4 absolute top-0 left-0">Mejor oferta</span>
                    ) : null
            }

            {/* IMAGEN } */}
            <Link href={`/product/${id}`}>
                <figure className="max-w-[348px] h-[350px]">
                    <Image
                        className="object-cover w-full h-full"
                        alt={description}
                        loading="lazy"
                        height={350}
                        width={348}
                        src={image}
                    />
                </figure>
            </Link>

            {/* DESCRIPTION  */}
            <div className='flex flex-col justify-between px-4 grow-1 h-full'>
                <h3 className='line-clamp-1'>{title}</h3>

                <div className='text-xl py-2'>
                    {
                        offer ? (
                            <>
                                <span className='before:content-["$"] text-red-500 line-through'>{price}</span>
                                <span className='pl-4 text-green-700 before:content-["$"]'>{(price - (price * 0.20)).toFixed(2)}</span>
                            </>
                        ) : (
                            <span className='before:content-["$"] text-green-700 ' >{price}</span>
                        )
                    }
                </div>

                {/* CONTADOR - BOTÓN SUMAR Y RESTAR PRODUCTOS Y ADD CART */}
                <ButtonCounterAddCart product={product} />

            </div>
        </article>
    )
}
