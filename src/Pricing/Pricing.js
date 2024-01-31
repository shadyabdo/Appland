import './Pricing.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect } from "react";



// AOS Animation
import AOS from 'aos';


export default function Pricing() {
    // Active AOS Animation
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='Pricing-Section' id='Pricing'>
            <Container>
                <h3 className='title' data-aos="fade-up" data-aos-duration="1500">Pricing</h3>
                <p data-aos="fade-up" data-aos-duration="1500">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

                <Row>
                    <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                        <Card className='card-price'>
                            <Card.Header className='card-header'>Free</Card.Header>
                            <Card.Body>
                                <Card.Title className='price'>$0</Card.Title>
                                <h5>per month</h5>
                                <Card.Text>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i> Quam adipiscing vitae proin</li>
                                        <li><i className="fa-solid fa-check"></i> Nec feugiat nisl pretium</li>
                                        <li><i className="fa-solid fa-check"></i> Nulla at volutpat diam uteera</li>
                                        <li style={{ textDecoration: "line-through", opacity: ".3" }}><i className="fa-solid fa-x"></i> Pharetra massa massa ultricies</li>
                                        <li style={{ textDecoration: "line-through", opacity: ".3" }}><i className="fa-solid fa-x"></i>  Massa ultricies mi quis hendrerit</li>
                                    </ul>
                                </Card.Text>
                                <Button className='price-btn'>Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* //////////////// */}
                    <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1500">
                        <Card className='card-price'>
                            <Card.Header style={{ color: "#fff", backgroundColor: "#5777ba" }} className='card-header'>Business</Card.Header>
                            <Card.Body>
                                <Card.Title className='price'>$29</Card.Title>
                                <h5>per month</h5>
                                <Card.Text>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i> Quam adipiscing vitae proin</li>
                                        <li><i className="fa-solid fa-check"></i> Nec feugiat nisl pretium</li>
                                        <li><i className="fa-solid fa-check"></i> Nulla at volutpat diam uteera</li>
                                        <li ><i className="fa-solid fa-check"></i> Pharetra massa massa ultricies</li>
                                        <li ><i className="fa-solid fa-check"></i>  Massa ultricies mi quis hendrerit</li>
                                    </ul>
                                </Card.Text>
                                <Button className='price-btn'>Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* /////////// */}
                    <Col lg={4} md={6} data-aos="fade-up" data-aos-duration="1700">
                        <Card className='card-price'>
                            <Card.Header className='card-header'>Developer</Card.Header>
                            <Card.Body>
                                <Card.Title className='price'>$49</Card.Title>
                                <h5>per month</h5>
                                <Card.Text>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i> Quam adipiscing vitae proin</li>
                                        <li><i className="fa-solid fa-check"></i> Nec feugiat nisl pretium</li>
                                        <li><i className="fa-solid fa-check"></i> Nulla at volutpat diam uteera</li>
                                        <li> <i className="fa-solid fa-check"></i> Pharetra massa massa ultricies</li>
                                        <li> <i className="fa-solid fa-check"></i> Massa ultricies mi quis hendrerit</li>
                                    </ul>
                                </Card.Text>
                                <Button className='price-btn'>Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>
        </section>
    )
}