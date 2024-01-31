import './Testimonials.css'

import Testimonials_1 from "../assets/img/testimonials/testimonials-1.jpg";
import Testimonials_2 from "../assets/img/testimonials/testimonials-2.jpg";
import Testimonials_3 from "../assets/img/testimonials/testimonials-3.jpg";
import Testimonials_4 from "../assets/img/testimonials/testimonials-4.jpg";
import Testimonials_5 from "../assets/img/testimonials/testimonials-5.jpg";

import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import { Autoplay, Pagination } from 'swiper/modules';

// React Bootstrap
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

// AOS Animation
import AOS from 'aos';

export default function Testimonials() {
    // Active AOS Animation
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section className='Testimonials-Section' id='Testimonials'>
            <Container>
                <h3 className='title' data-aos="fade-up" data-aos-duration="1500">Testimonials</h3>
                <p data-aos="fade-up" data-aos-duration="1500">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>


                {/* Swiper */}
                <>
                    <Swiper data-aos="fade-up" data-aos-duration="1700"
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
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            440: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },

                            980: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {/* ///////////////// */}
                        <SwiperSlide>
                            <Card className="card-Testimonials shadow-sm border-0">
                                <Card.Img variant="top" src={Testimonials_1} />
                                <div className='card-head'>  <h3>Saul Goodman</h3>
                                    <p>Ceo & Founder</p></div>
                                <Card.Body>

                                    <Card.Text className='card-text'><i className="fa-solid fa-quote-left"></i>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.  <i className="fa-solid fa-quote-right"></i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>

                        {/* ////////////////////////// */}
                        <SwiperSlide>
                            <Card className="card-Testimonials shadow-sm border-0">
                                <Card.Img variant="top" src={Testimonials_2} />
                                <div className='card-head'>  <h3>Sara Wilsson</h3>
                                    <p>Designer</p></div>
                                <Card.Body>

                                    <Card.Text className='card-text'><i className="fa-solid fa-quote-left"></i>

                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i className="fa-solid fa-quote-right"></i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>

                        {/* ////////////////////////// */}
                        <SwiperSlide>
                            <Card className="card-Testimonials shadow-sm border-0">
                                <Card.Img variant="top" src={Testimonials_3} />
                                <div className='card-head'>  <h3>Jena Karlis</h3>
                                    <p>Store Owner</p></div>
                                <Card.Body>

                                    <Card.Text className='card-text'><i className="fa-solid fa-quote-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i className="fa-solid fa-quote-right"></i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>

                        {/* ////////////////////////// */}
                        <SwiperSlide>
                            <Card className="card-Testimonials shadow-sm border-0">
                                <Card.Img variant="top" src={Testimonials_4} />
                                <div className='card-head'>  <h3>Matt Brandon</h3>
                                    <p>Freelancer</p></div>
                                <Card.Body>

                                    <Card.Text className='card-text'><i className="fa-solid fa-quote-left"></i>

                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i className="fa-solid fa-quote-right"></i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>

                        {/* ////////////////////////// */}
                        <SwiperSlide>
                            <Card className="card-Testimonials shadow-sm border-0">
                                <Card.Img variant="top" src={Testimonials_5} />
                                <div className='card-head'>  <h3>John Larson</h3>
                                    <p>Entrepreneur</p></div>
                                <Card.Body>

                                    <Card.Text className='card-text'><i className="fa-solid fa-quote-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="fa-solid fa-quote-right"></i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>

                        {/* ////////////////////////// */}

                    </Swiper>
                </>
            </Container>
        </section>


    );
}
