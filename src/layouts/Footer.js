// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = (): React$Element<any> => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col md={12}>{currentYear} © BMG - <a href="https://rowthtech.com/" className='text-muted'><u>rowthtech.com</u></a></Col>

                    {/* <Col md={6}>
                        <div className="text-md-end footer-links d-none d-md-block">
                            <Link to="#">About</Link>
                            <Link to="#">Support</Link>
                            <Link to="#">Contact Us</Link>
                        </div>
                    </Col> */}
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
