import React from 'react';
import {Button, Col, Container, Form, InputGroup, NavLink, Row} from "react-bootstrap";
import '../../styles/footer.scss'
import {BsFacebook, BsInstagram, BsLinkedin, BsPhone, BsSend, BsSendPlusFill} from "react-icons/bs";
import logo from '../../images/logo-blanc.png';
import {FaLocationDot} from "react-icons/fa6";
import {TfiEmail} from "react-icons/tfi";
import {GiRotaryPhone} from "react-icons/gi";
import {FaFacebookF} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function () {
    return(
        <footer>
            <div className="footer">
                <Container fluid="lg">
                    <Row className="d-flex justify-content-center align-content-center" data-aos="zoom-in" data-aos-duration={2000} data-aos-easing="ease-in-out">
                        <Col sm={10} lg={8} xl={6}>
                            <form action="">
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Entrez votre adresse email"
                                        size="lg"
                                    />
                                    <Button variant={"secondary"}>
                                        <BsSend/> <span>S'inscrire</span>
                                    </Button>
                                </InputGroup>
                            </form>
                        </Col>
                    </Row>
                    <Row className="rubrique">
                        <Col sm={12} lg={5} xl={5} className="presentation" data-aos="fade-right" data-aos-duration={2000} data-aos-easing="ease-in-out">
                            <img src={logo} alt="logo ORLUXE" className="img-fluid logo"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, aliquid asperiores earum, eius enim facere, hic impedit iste molestiae nisi sint suscipit totam. Architecto debitis deleniti iusto nam reprehenderit?
                            </p>
                        </Col>
                        <Col xl={3} lg={3} sm={5} data-aos="fade-left" data-aos-duration={2000} data-aos-easing="ease-in-out">
                            <h5>Rubriques</h5>
                            <ul>
                                <li><Link to="/presentation" className="nav-link">Qui sommes-nous?</Link></li>
                                <li><Link to="/nos-services" className="nav-link">Nos services</Link></li>
                                <li><Link to="/nos-offres" className="nav-link">Nos offres</Link></li>
                            </ul>
                        </Col>
                        <Col sm={7} lg={4} data-aos="fade-left" data-aos-duration={2000} data-aos-easing="ease-in-out">
                            <h5>Contact</h5>
                            <ul>
                                <li>
                                    <Link to="" className="nav-link"><FaLocationDot/> Abidjan Plateau</Link>
                                </li>
                                <li>
                                    <Link to="" className="nav-link"><TfiEmail/> info@orluxe.com</Link>
                                </li>
                                <li>
                                    <Link to="" className="nav-link"><GiRotaryPhone/> +225 00 00 00 00</Link>
                                </li>
                                <li>
                                    <Link to="" className="nav-link"><BsPhone/> +225 00 00 00 00</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="copyright">
                        <Col sm={12} md={10} className="reference">
                            Copyright &copy; 2023 <span>ORLUXE ESTATE</span> | Tous droits réservés.
                        </Col>
                        <Col sm={12} md={2} className="social-icons">
                            <a href="#"><BsFacebook/></a>
                            <a href="#"><BsInstagram/></a>
                            <a href="#"><BsLinkedin/></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}