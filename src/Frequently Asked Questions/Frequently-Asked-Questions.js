import './Frequently-Asked-Questions.css'
import React, { useEffect } from "react";

import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap'


// AOS Animation
import AOS from 'aos';

export default function Frequently_Asked_Questions() {
      // Active AOS Animation
      useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='F_A_Q_Section' id='F.A.Q'>
            <Container>

                <h3 className='title' data-aos="fade-up" data-aos-duration="1500">Frequently Asked Questions</h3>
                <p data-aos="fade-up" data-aos-duration="1500">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0" data-aos="fade-up" data-aos-duration="1500">
                        <Accordion.Header className='shadow-none'> <i className="fa-regular fa-circle-question me-2"></i>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                        <Accordion.Body>
                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* ///////////// */}
                    <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-duration="1500">
                        <Accordion.Header className='shadow-none'> <i className="fa-regular fa-circle-question me-2"></i>Feugiat scelerisque varius morbi enim nunc?</Accordion.Header>
                        <Accordion.Body>
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* ///////////// */}
                    <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="1500">
                        <Accordion.Header className='shadow-none'> <i className="fa-regular fa-circle-question me-2"></i>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</Accordion.Header>
                        <Accordion.Body>
                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* /////////// */}
                    <Accordion.Item eventKey="3" data-aos="fade-up" data-aos-duration="1500">
                        <Accordion.Header className='shadow-none'> <i class="fa-regular fa-circle-question me-2"></i>Dolor sit amet consectetur adipiscing elit?</Accordion.Header>
                        <Accordion.Body>
                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>


    );
}

