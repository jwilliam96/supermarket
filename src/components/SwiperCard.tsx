"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import "swiper/css/bundle"


import { useEffect, useState } from 'react';
import { CardProduct } from './CardProduct';
import { Product } from '@/interface';


interface Props {
    filterProduct: "all" | "offer" | "ventas" | "frescura"
    products: Product[]
}

export function SwiperCard({ filterProduct, products }: Props) {

    return (
        <div className='px-16 relative'>
            <button style={{
                "color": "#ef4444"
            } as React.CSSProperties}
                className='swiper-button-prev'></button>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            >

                {
                    products?.map(product => (
                        <SwiperSlide key={product.id}>
                            <CardProduct product={product} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <button
                style={{
                    "color": "#ef4444"
                } as React.CSSProperties}
                className='swiper-button-next'></button>
        </div>
    )
}
