"use client"

import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    children: JSX.Element[]
}

export function SwiperHeader({ children }: Props) {
    return (
        <Swiper
            className="h-[300px] md:h-[400px] lg:h-[550px] w-full relative"
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 4000 }}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"

        >
            {
                children.map((child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))
            }


        </Swiper>
    )
}
