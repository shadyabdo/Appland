import './Footer.css'
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Footer() {

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href="#!">{children}</a>
        </OverlayTrigger>
    );


    return (
        <Container fluid className='Container'>
            <div className='icons'>

                <Link title="Facebook" id="t-1">
                    <i class="fa-brands fa-facebook"></i>
                </Link>
                {/* ////// */}
                <Link title="Twitter" id="t-2">
                    <i class="fa-brands fa-twitter"></i>
                </Link>
                {/* ////// */}
                <Link title="Instagram" id="t-3">
                    <i class="fa-brands fa-square-instagram"></i>
                </Link>
                {/* ////// */}

                <Link title="Github" id="t-4">
                <i class="fa-brands fa-github-alt"></i>
                </Link>
                {/* ////// */}



                
               

            </div>
            <p> &#169; Copyright Append All Rights Reserved</p>
        </Container>
    );
}

