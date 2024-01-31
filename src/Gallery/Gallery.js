import React, { useEffect } from "react";

import './Gallery.css'

import gallery_1 from '../assets/img/gallery/gallery-1.png'
import gallery_2 from '../assets/img/gallery/gallery-2.png'
import gallery_3 from '../assets/img/gallery/gallery-3.png'
import gallery_4 from '../assets/img/gallery/gallery-4.png'
import gallery_5 from '../assets/img/gallery/gallery-5.png'
import gallery_6 from '../assets/img/gallery/gallery-6.png'
import gallery_7 from '../assets/img/gallery/gallery-7.png'
import gallery_8 from '../assets/img/gallery/gallery-8.png'
import gallery_9 from '../assets/img/gallery/gallery-9.png'
import gallery_10 from '../assets/img/gallery/gallery-10.png'
import gallery_11 from '../assets/img/gallery/gallery-11.png'
import gallery_12 from '../assets/img/gallery/gallery-12.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Container } from 'react-bootstrap'


// AOS Animation
import AOS from 'aos';

export default function Gallery() {

    // Active AOS Animation
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section className='Gallery-Section' id='Gallery'>
            <Container>
                <h3 className='title' data-aos="fade-up" data-aos-duration="1500">Gallery</h3>
                <p data-aos="fade-up" data-aos-duration="1500">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>


                {/* Swiper */}
                <>
                    <Swiper data-aos="fade-up" data-aos-duration="1500"
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}




                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"

                        breakpoints={{

                            300: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {/* ///////////////// */}
                        <SwiperSlide><img src={gallery_1} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_2} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_3} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_4} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_5} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_6} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_7} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_8} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_9} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_10} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_11} /></SwiperSlide>
                        <SwiperSlide><img src={gallery_12} /></SwiperSlide>
                    </Swiper>
                </>
            </Container>
        </section>


    );
}



