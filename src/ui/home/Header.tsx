"use client"

import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesHeader } from "@/utils/helps";
import Image from "next/image";

export function Header() {

    return (
        <header className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-[5%] lg:left-[10%] xl:left-[20%] 2xl:left-[25%] z-50">
                <p className="text-xl md:text-2xl">Fácil, fresco y cómodo</p>
                <h2 className="text-3xl font-bold my-4 md:text-7xl">Compra lo <br />básico del día</h2>
                <p className="text-2xl font-bold md:text-3xl">Ahorra en grande en <br />tus marcas favoritas</p>
                <button className="bg-red-500 text-white text-xl px-3 py-2  rounded-full my-10">Comprar ahora</button>
            </div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000 }}
                spaceBetween={50}
                slidesPerView={1}
                className="h-[400px] md:h-[550px] relative"

            >
                {
                    imagesHeader.map(image => (
                        <SwiperSlide key={image.img}>
                            <Image
                                src={image.img}
                                fill
                                alt={image.description}
                                priority
                                className="object-cover "
                            />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </header>
    )
}
