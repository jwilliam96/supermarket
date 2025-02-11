"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import "swiper/css/bundle"

import { CardProduct } from '../cards/CardProduct';
import { Product } from '@/interface';

interface Props {
    products: Product[]
    filterProduct?: "offer" | "ventas" | "frescura"
}

export function SwiperContainer({ products, filterProduct }: Props) {


    let productsFilter: Product[] = [];

    const filters: Record<string, (product: Product) => boolean> = {
        offer: (product) => product.offer,
        ventas: (product) => product.masVendido ?? false,
        frescura: (product) =>
            ["vegetales", "frutas"].includes(product.subCategory?.subcategory || ""),
    };

    if (filterProduct && filters[filterProduct]) {
        productsFilter = products.filter(filters[filterProduct]);
    } else {
        productsFilter = products;
    }


    return (
        <div className='px-16 relative'>
            <button style={{
                "color": "#ef4444"
            } as React.CSSProperties}
                className='swiper-button-prev'></button>
            <Swiper
                spaceBetween={25}
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
                    productsFilter.map(product => (
                        <SwiperSlide key={product.id}>
                            <CardProduct product={product} />
                            <div className="swiper-lazy-preloader"></div>
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
