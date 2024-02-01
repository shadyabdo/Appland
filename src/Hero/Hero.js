import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Hero.css";
import React,{useEffect} from "react";
// images
import Hero_img from '../assets/img/hero-img.png';


// AOS Animation
import AOS from 'aos';


function Home() {
    // Active AOS Animation
    useEffect(() => {
        AOS.init();
      }, [])
    ////////////


    return (

        <section id='Home' className='Home-Section'>
            <Container className='container'>
            <script
                src="https://app.wonderchat.io/scripts/wonderchat.js"
                data-name="wonderchat"
                data-address="app.wonderchat.io"
                data-id="cls1pljfl0121qe220j8ehrwb"
                data-widget-size="normal"
                data-widget-button-size="normal"
                defer
            ></script>
            <Row>
                <Col className='home-text' data-aos="fade-right" data-aos-duration="1500" lg ={6} sm={12}>
                <h1>App landing page <br/> template</h1>
                <p>Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait</p>
                <div className='btn btn-hero'><i className="fa-brands fa-google-play icon"></i> Google Play</div>
                <div className='btn btn-hero'> <i className="fa-brands fa-apple icon"></i>App Store</div>
                </Col>
                <Col lg ={6} sm={12} data-aos="fade-left" data-aos-duration="1500"><img src={Hero_img} /></Col>
            </Row>
        </Container>
        </section>
        


    );
}

export default Home;