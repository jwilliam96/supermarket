"use client"

import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesHeader } from "@/utils/helps";
import Image from "next/image";

export function Header() {

    return (
        <header className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-[27%] z-50">
                <p className="text-2xl">Fácil, fresco y cómodo</p>
                <h2 className="text-7xl font-bold my-4">Compra lo <br />básico del día</h2>
                <p className="text-3xl font-bold">Ahorra en grande en <br />tus marcas favoritas</p>
                <button className="bg-red-500 text-white px-3 py-1  rounded-full my-6">Comprar ahora</button>
            </div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000 }}
                spaceBetween={50}
                slidesPerView={1}

            >
                {
                    imagesHeader.map(image => (
                        <SwiperSlide key={image.img}>
                            <Image
                                src={image.img}
                                width={1300}
                                height={600}
                                alt={image.description}
                                priority
                                className="w-full h-auto "
                            />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </header>
    )
}