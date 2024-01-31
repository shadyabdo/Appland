import './App_Features.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from "react";

// images
import Features_img from '../assets/img/features.svg';
import Details_1 from '../assets/img/details-1.png';
import Details_2 from '../assets/img/details-2.png';
import Details_3 from '../assets/img/details-3.png';
import Details_4 from '../assets/img/details-4.png';


////////////
// AOS Animation
import AOS from 'aos';

function App_Features() {
    // Active AOS Animation
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section id='App-Features'>
            <Container className='container'>
                <div className='App_Features_info'>
                    <h1 className='title' data-aos="fade-up" data-aos-duration="1500">
                        App Features
                    </h1>

                    <p data-aos="fade-up" data-aos-duration="1500">
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>


                <Row className='row_App_Features-1 row_App_Features'>
                    <Col lg={8} sm={12}>
                        <Row className='row-Apps'>
                            <Col lg={6} sm={12}>
                                <ul data-aos="fade-up" data-aos-duration="1500"> <li><i className="fa-solid fa-file-invoice icon"></i> <h5>Corporis voluptates sit</h5> <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p></li></ul>
                            </Col>
                            {/* ///////// */}
                            <Col lg={6} sm={12}>
                                <ul data-aos="fade-up" data-aos-duration="1500"> <li><i className="fa-solid fa-cube icon"></i> <h5>Corporis voluptates sit</h5> <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p></li></ul>
                            </Col>
                            {/* ///////// */}
                            <Col lg={6} sm={12}>
                                <ul data-aos="fade-up" data-aos-duration="1500"> <li><i className="fa-solid fa-images icon"></i> <h5>Corporis voluptates sit</h5> <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p></li></ul>
                            </Col>
                            {/* ///////// */}
                            <Col lg={6} sm={12}>
                                <ul data-aos="fade-up" data-aos-duration="1500"> <li><i className="fa-solid fa-shield-halved icon"></i> <h5>Corporis voluptates sit</h5> <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p></li></ul>
                            </Col>
                            {/* ///////// */}
                            <Col lg={6} sm={12}>
                                <ul data-aos="fade-up" data-aos-duration="1500"> <li><i className="fa-solid fa-atom icon"></i> <h5>Corporis voluptates sit</h5> <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p></li></ul>
                            </Col>
                            {/* ///////// */}
                            <Col lg={6} sm={12}>
                                <ul data-aos="fade-up" data-aos-duration="1500"> <li><i className="fa-solid fa-address-card icon"></i> <h5>Corporis voluptates sit</h5> <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p></li></ul>
                            </Col>
                            {/* ///////// */}

                        </Row>

                    </Col>
                    {/* ////////// */}
                    <Col lg={4} sm={12} data-aos="fade-left" data-aos-duration="1500">
                        <img src={Features_img} />
                    </Col>
                </Row>
                {/* ////////////// */}

                <Row className='row_App_Features-2 row_App_Features' data-aos="fade-right" data-aos-duration="1500">
                    <Col className='App_Features-2-image' lg={4} sm={12}>
                        <img src={Details_1} />
                    </Col>

                    {/* ////// */}

                    <Col className='row_App_Features-2-text' lg={8} sm={12}>
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className='italic_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='check'>
                            <span><i className="fa-solid fa-check"></i> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></span>
                            <span><i className="fa-solid fa-check"></i> <p> Duis aute irure dolor in reprehenderit in voluptate velit.</p></span>
                            <span><i className="fa-solid fa-check"></i> <p>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p></span>
                        </div>
                        <p>Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.</p>
                        <p>Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.</p>
                    </Col>

                </Row>

                {/* /////////////// */}
                <Row className='row_App_Features-3 row_App_Features' data-aos="fade-left" data-aos-duration="1500">


                    <Col className='vrow_App_Features-3-text' lg={8} sm={12}>
                        <h3>Corporis temporibus maiores provident</h3>
                        <p className='italic_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='check'>
                            <span> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></span>
                            <span> <p> Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.</p></span>

                        </div>

                    </Col>
                    {/* ////////// */}
                    <Col className='App_Features-3-image' lg={4} sm={12}>
                        <img src={Details_2} />
                    </Col>

                </Row>
                {/* ////////// */}
                <Row className='row_App_Features-4 row_App_Features' data-aos="fade-right" data-aos-duration="1500">
                    <Col className='pp_Features-4-image' lg={4} sm={12}>
                        <img src={Details_3} />
                    </Col>

                    {/* ////// */}

                    <Col lg={8} sm={12} className='App_Features-4-text'>
                        <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                        <p className='italic_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='check'>
                            <span><i className="fa-solid fa-check"></i> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></span>
                            <span><i className="fa-solid fa-check"></i> <p> Duis aute irure dolor in reprehenderit in voluptate velit.</p></span>
                            <span><i className="fa-solid fa-check"></i> <p>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p></span>
                        </div>
                        <p>Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.</p>
                        <p>Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.</p>
                    </Col>

                </Row>
                {/* ////////// */}
                <Row className='row_App_Features-5 row_App_Features' data-aos="fade-left" data-aos-duration="1500">


                    <Col lg={8} sm={12} className='App_Features-5-text'>
                        <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                        <p className='italic_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='check'>
                            <span><i className="fa-solid fa-check"></i> <p> Et praesentium laboriosam architecto nam .</p></span>
                            <span><i className="fa-solid fa-check"></i> <p> Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</p></span>
                            <span><i className="fa-solid fa-check"></i> <p>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p></span>
                        </div>

                    </Col>
                    {/* ////// */}
                    <Col lg={4} sm={12} className='App_Features-5-image' >
                        <img src={Details_4} />
                    </Col>

                </Row>

            </Container>
        </section>

    )
}

export default App_Features;