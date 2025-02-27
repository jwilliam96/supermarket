"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Product } from '@/interface';

interface SwiperProductsProps {
    children: React.ReactNode;
}

export function SwiperProducts({ children }: SwiperProductsProps) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                Array.from({ length: 5 }, (_, id) => {
                    return (
                        <SwiperSlide key={id}>
                            {children}
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};