"use client"

import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesHeader } from "@/utils";
import Image from "next/image";


export function SwiperHeader() {
    return (
        <Swiper
            className="h-[400px] md:h-[550px] relative"
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 4000 }}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"

        >
            {
                imagesHeader.map(image => (
                    <SwiperSlide key={image.img}>
                        <Image
                            className="object-cover w-full h-full"
                            alt={image.description}
                            src={image.img}
                            width={1000}
                            height={350}
                            priority
                        />
                    </SwiperSlide>
                ))
            }


        </Swiper>
    )
}
