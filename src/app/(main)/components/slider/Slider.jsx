"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css";
import "./custom-swiper-bullet.css";
import { Type0, Type1, Type2 } from './components/Card'

function Slider({ items, type = 0, def, lg, md, nav = true, loop = false }) {
    const customBar = type == 0 ? import("./custom-bar-0.css") : import("./custom-bar-1.css");

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={nav}
            pagination={type != 2 ? { clickable: true } : false}
            slidesPerView={def}
            breakpoints={{ 1024: { slidesPerView: lg }, 768: { slidesPerView: md } }}
            spaceBetween={type == 0 ? 10 : type == 1 ? 100 : 20}
            loop={loop}
            className={`!relative w-full cursor-grab h-auto ${type != 2 ? type == 0 ? '!pb-0 !px-4' : '!pb-12 !px-0' : '!pb-0 !px-0 !mx-0'}`} >
            {items.map((item) => (
                <SwiperSlide key={item.id} className={`!h-auto overflow-hidden ${type != 2 ? type == 0 ? 'rounded-none mb-12' + ' aspect-[3/2]' : 'rounded-2xl' + ' aspect-square' : '!px-0'}`}>
                    {type === 0 ?
                        <Type0 item={item} />
                        : type === 1 ?
                            <Type1 item={item} />
                            :
                            <Type2 item={item} />
                    }

                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
