import './contact.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useEffect } from "react";


// AOS Animation
import AOS from 'aos';


export default function Contact() {
    // Active AOS Animation
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='Contact-Section' id="contact">
            <Container>
                <h3 className='title' data-aos="fade-up" data-aos-duration="1500">Contact</h3>
                <p data-aos="fade-up" data-aos-duration="1500">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

                <Row className='row-container'>
                    <Col lg={6} className='contact-info' data-aos="fade-up" data-aos-duration="1500">

                        <Row className='contact-info-content'>
                            <Col lg={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><i className="fa-solid fa-location-dot"></i></Card.Title>
                                        <Card.Subtitle className=" text-muted">ADDRESS</Card.Subtitle>
                                        <Card.Text>

                                            A108 Adam Street, <br />
                                            New York, NY 535022

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* ///////// */}
                            <Col lg={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><i className="fa-solid fa-phone"></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">CALL US</Card.Subtitle>
                                        <Card.Text>
                                            +1 5589 55488 55 <br />
                                            +1 5589 22548 64
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* //////////// */}
                            <Col lg={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><i className="fa-solid fa-envelope"></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">EMAIL US</Card.Subtitle>
                                        <Card.Text>
                                            contact@example.com
                                            <br />
                                            info@example.com
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* /////////// */}

                            <Col lg={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><i className="fa-solid fa-clock"></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">WORKING HOURS</Card.Subtitle>
                                        <Card.Text>
                                            Mon - Fri: 9AM to 5PM <br />
                                            Sunday: 9AM to 1PM
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>


                    </Col>


                    {/* Form Contact */}
                    <Col lg={6} data-aos="fade-up" data-aos-duration="1500">
                        <Form>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Control className='shadow-none' type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Control className='shadow-none' type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Control className='shadow-none' type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1" >
                                <Form.Control className='shadow-none' as="textarea" rows={4} placeholder="Message" />
                            </Form.Group>
                        </Form>

                        <div className='text-center'>
                            <button className='contact-btn'>
                                Send Message
                            </button>
                        </div>
                    </Col>




                </Row>



            </Container>
            
        </section>
        
    );
}




