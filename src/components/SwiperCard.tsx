"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import "swiper/css/bundle"

import { CardProduct } from '@/components';
import { initialData } from '@/seed/productData';
import { Category, Product, SubCategory } from '@prisma/client';
import { useEffect, useState } from 'react';


interface Props {
    filterProduct: "all" | "offer" | "ventas" | "frescura"
}

interface TypeProducts {
    products: Product[]
    categories: Category[]
    subCategory: SubCategory[]
}


export function SwiperCard({ filterProduct }: Props) {

    const [productsData, setProducts] = useState<TypeProducts>()

    useEffect(() => {

        async function getProducts() {
            const data = await fetch("http://localhost:3000/api/products")
                .then(res => res.json())
                .catch(err => console.log(err))

            setProducts(data)
        }

        getProducts()

    }, [])


    // if (productsData) {

    //     const { categories, products, subCategory } = productsData

    //     const masVendidos: Product[] = []

    //     const filterVentas = (category: string) => {


    //         const filtroCategory = categories.filter(c => c.category === category)

    //         const ordenadosPorVentas = filtroCategory.sort((a, b) => b.ventas - a.ventas);

    //         const mayorVenta = ordenadosPorVentas[0]

    //         masVendidos.push(mayorVenta)

    //     }

    // if (filterProduct === "ventas") {
    //     options.map(option => {
    //         filterVentas(option)
    //     })
    // }
    // }


    // FILTRAR POR PRODUCTOS MAS VENDIDOS 

    // const options = ["vegetales", "panadería", "vino", "lácteos y huevos", "carne y aves", "bebidas sin alcohol", "productos de limpieza", "cereales y botanas", "frutas", "pescados y mariscos", "pastas y granos", "té", "café", "cerveza", "casa y cocina", "higiene personal", "bebes"]



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
                {/* {
                    filterProduct === "all" && (
                        products.map(product => (
                            <SwiperSlide key={product.image}>

                                <CardProduct {...product} />


                            </SwiperSlide>
                        ))
                    )
                }

                {
                    filterProduct === "offer" && (
                        (
                            products.filter(product => product[filterProduct]).map(product => (
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
                        products.filter(product => product.subCategory === "frutas" || product.subCategory === "vegetales").map(product => (
                            <SwiperSlide key={product.image}>

                                <CardProduct {...product} />


                            </SwiperSlide>
                        ))
                    )
                } */}

            </Swiper>
            <button
                style={{
                    "color": "#ef4444"
                } as React.CSSProperties}
                className='swiper-button-next'></button>
        </div>
    )
}
