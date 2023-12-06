import React, {useEffect} from 'react';
import {Button, Col, Container, NavLink, Row} from "react-bootstrap";
import logo from "../../images/logo.png"
import {BiSolidTimeFive} from "react-icons/bi";
import {TbDeviceLandlinePhone} from "react-icons/tb";
import {FiMail} from "react-icons/fi";
import {FaLocationDot} from "react-icons/fa6";
import {PiSignInBold} from "react-icons/pi";
import MobileMenu from "./MobileMenu.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import {BsSearch} from "react-icons/bs";

export default function () {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <header>
            <section id="topHead">
                <div className="topHead">
                    <Container fluid="lg">
                        <Row>
                            <Col xs={5} lg={3} xl={5} data-aos="zoom-in" data-aos-duration={2000} data-aos-easing="ease-in-out">
                                <Link to="/">
                                    <img src={logo} className="img-fluid logo" alt="Logo"/>
                                </Link>

                            </Col>
                            <Col xs={7} lg={9} xl={7} className="coordonnees">
                                <Row className="w-100">
                                    <Col data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration={2000}>
                                        <div className="icon"><TbDeviceLandlinePhone/></div>
                                        <div className="infos">
                                            <Link to="tel:+22500000000" className="telephone">+225 21 22 44 42</Link>
                                            <div className="label">Appelez-nous</div>
                                        </div>
                                    </Col>
                                    <Col data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration={2000}>
                                        <div className="icon"><FiMail/></div>
                                        <div className="infos">
                                            <Link to="mailto:infos@orluxe.org" className="mail">infos@orluxe.com</Link>
                                            <div className="label">Ecrivez-nous</div>
                                        </div>
                                    </Col>
                                    <Col data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration={2000}>
                                        <div className="icon"><FaLocationDot/></div>
                                        <div className="infos">
                                            <Link to="mailto:infos@orluxe.org" className="mail">Abidjan, plateau</Link>
                                            <div className="label">Rejoignez-nous</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={7} lg={9} xl={7} className="mobile-menu">
                                <Link to="/recherche">
                                    <Button className="btn-menu">
                                        <BsSearch /> <span>Recherche</span>
                                    </Button>
                                </Link>
                                <MobileMenu/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <DesktopMenu/>
        </header>
    )
}