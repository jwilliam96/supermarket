"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import "swiper/css/bundle"

import { CardProduct } from '../CardProduct';
import { Product } from '@/interface';


interface Props {
    ventas?: Product[] | undefined
    products: Product[] | undefined
}

export function SwiperCard({ ventas, products }: Props) {



    return (
        <div className='px-16 relative'>
            <button style={{
                "color": "#ef4444"
            } as React.CSSProperties}
                className='swiper-button-prev'></button>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 4
                    }
                }}
            >

                {
                    products?.map(product => (
                        <SwiperSlide key={product.id}>
                            <CardProduct product={product} ventas={ventas} />
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
