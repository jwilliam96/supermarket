"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import "swiper/css/bundle"

import { productsData } from '@/seed/productData';
import { CardProduct } from '@/components';
import { Product } from '@/interface';


interface Props {
    filterProduct: "all" | "offer" | "ventas" | "frescura"
}

export function SwiperCard({ filterProduct }: Props) {

    // FILTRAR POR PRODUCTOS MAS VENDIDOS 

    const options = ["vegetales", "panadería", "vino", "lácteos y huevos", "carne y aves", "bebidas sin alcohol", "productos de limpieza", "cereales y botanas", "frutas", "pescados y mariscos", "pastas y granos", "té", "café", "cerveza", "casa y cocina", "higiene personal", "bebes"]

    const masVendidos: Product[] = []

    function filterVentas(category: string) {
        const filtroCategory = productsData.filter(p => p.subCategory === category)

        const ordenadosPorVentas = filtroCategory.sort((a, b) => b.ventas - a.ventas);

        const mayorVenta = ordenadosPorVentas[0]

        masVendidos.push(mayorVenta)
    }

    if (filterProduct === "ventas") {
        options.map(option => {
            filterVentas(option)
        })
    }

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
                    filterProduct === "all" && (
                        productsData.map(product => (
                            <SwiperSlide key={product.image}>

                                <CardProduct {...product} />


                            </SwiperSlide>
                        ))
                    )
                }

                {
                    filterProduct === "offer" && (
                        (
                            productsData.filter(product => product[filterProduct]).map(product => (
                                <SwiperSlide key={product.image}>

                                    <CardProduct {...product} />


                                </SwiperSlide>
                            ))
                        )
                    )
                }

                {
                    filterProduct === "ventas" && (
                        masVendidos.map(product => (
                            <SwiperSlide key={product.image}>

                                <CardProduct {...product} />


                            </SwiperSlide>
                        ))
                    )
                }
                {
                    filterProduct === "frescura" && (
                        productsData.filter(product => product.subCategory === "frutas" || product.subCategory === "vegetales").map(product => (
                            <SwiperSlide key={product.image}>

                                <CardProduct {...product} />


                            </SwiperSlide>
                        ))
                    )
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
