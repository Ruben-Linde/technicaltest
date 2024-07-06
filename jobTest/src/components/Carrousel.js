"use client";
import React, { useEffect } from 'react'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import { v4 as uuidv4 } from 'uuid';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Carrousel = ({ items }) => {

    useEffect(() => {
    }, [items]);

    return (
        <div className="w-full flex">
            <Swiper key={uuidv4()}
                modules={[
                    Navigation, 
                    A11y,
                ]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                
            {items.results.map((item, pageIndex) => (
                <SwiperSlide virtualIndex={item.id} key={item.id}>
                <div className="card_item text-white">
                    <div className="card_inner bg-slate-700 rounded-md p-1 min-h-96 min-w-52" >
                        <img 
                            className="object-cover rounded-md min-h-56 h-fit w-full mb-2" 
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                            alt={item.original_title} 
                        />
                        {item.original_title}
                        <div className="detail-box">
                            <div className="gitDetail"><span>Score: </span>{item.vote_average}</div>
                            <div className="gitDetail"><span>Release Date: </span>{item.release_date}</div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))
            }
                
            </Swiper>
        </div >
    );
}


export {
    Carrousel,
}