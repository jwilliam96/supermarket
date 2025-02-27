"use client"

import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    children: JSX.Element[]
}

export function SwiperHeader({ children }: Props) {
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
                children.map((child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))
            }


        </Swiper>
    )
}
