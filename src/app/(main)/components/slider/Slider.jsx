"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css";
import "./custom-swiper-bullet.css";

import Image from "next/image";
import Link from "next/link";

function Slider({ items, type = 0, def, lg, md, nav = true, loop = false }) {
    const customBar = type == 0 ? import("./custom-bar-0.css") : import("./custom-bar-1.css");
    console.log(items)
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={nav}
            pagination={type == 0 ? false : { clickable: true }}
            slidesPerView={def}
            breakpoints={{ 1024: { slidesPerView: lg }, 768: { slidesPerView: md } }}
            spaceBetween={type == 0 ? 10 : 100}
            loop={loop}
            className={`!relative w-full cursor-grab h-auto ${type == 0 ? '!pb-0 !px-4' : '!pb-12 !px-16'}`} >
            {items.map((item) => (
                <SwiperSlide key={item.id} className={`!h-auto overflow-hidden ${type == 0 ? 'rounded-none' + ' aspect-[3/2]' : 'rounded-2xl' + ' aspect-square'}`}>
                    {item.imgUrl ?
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={item.imgUrl}
                                alt={item.alt ? item.alt : 'Evento'}
                                width={700}
                                height={700}
                                className="absolute w-full h-full object-cover"
                                loading="eager"
                            />
                        </Link>
                        :
                        <Image
                            src={item.imgUrl}
                            alt={item.alt ? item.alt : 'Evento'}
                            width={700}
                            height={700}
                            className="absolute w-full h-full object-cover"
                            loading="eager"
                        />
                    }

                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
