"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SwiperProductsProps {
    children: React.ReactNode[];
}

export function SwiperProducts({ children }: SwiperProductsProps) {
    return (
        <Swiper spaceBetween={50} slidesPerView={3}>
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
}
