"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"
import "swiper/css/bundle"

interface SwiperProductsProps {
    children: React.ReactNode[];
}

export function SwiperContainer({ children }: SwiperProductsProps) {
    return (
        <div className='px-16 relative'>
            <button style={{
                "color": "#ef4444"
            } as React.CSSProperties}
                className='swiper-button-prev'></button>

            <Swiper spaceBetween={25}
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
                }}>

                {
                    children.map((child, index) => (
                        <SwiperSlide key={index}>
                            {child}
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
    );
}
