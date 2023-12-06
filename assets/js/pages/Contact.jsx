import React from "react";
import Meta from "../components/Meta";
import {Breadcrumb, Card, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {IoHome} from "react-icons/io5";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {Link} from "react-router-dom";
import "../../styles/contact.scss";
import {GiRotaryPhone} from "react-icons/gi";
import {BsPhone} from "react-icons/bs";
import {RiMailCheckLine, RiMailSendLine} from "react-icons/ri";
import {FiMail} from "react-icons/fi";
import {FaFacebook, FaHashtag} from "react-icons/fa";
import {FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";

export default function () {
    return (
        <>
            <Meta
                title="Nous contacter"
                description="ORLUXE Estate, plateforme de gestion des biens immobiliers"
                keywords="ORLUXE, immobilier, terrain, vente, location"
            />
            <main>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><IoHome /></Breadcrumb.Item>
                        {/*<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">*/}
                        {/*    Library*/}
                        {/*</Breadcrumb.Item>*/}
                        <Breadcrumb.Item active>Nous contacter</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="contact">
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center align-content-center">
                            <Col>
                                <Card className="h-100">
                                    <Card.Body>
                                        <div className="icon"><TfiHeadphoneAlt /></div>
                                        <h4 className="text-center">Appelez-nous</h4>
                                        <div className="d-flex justify-content-around align-items-center phone">
                                            <Link to="tel:+22507000000"><GiRotaryPhone/> +22507000000</Link>
                                            <Link to="tel:+22507000000"><BsPhone/> +22507100000</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100">
                                    <Card.Body>
                                        <div className="icon"><RiMailSendLine /></div>
                                        <h4 className="text-center">Ecrivez-nous</h4>
                                        <div className="text-center phone">
                                            <Link to="mailto:info@orluxe-estate.com"><FiMail /> info@orluxe-estate.com</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100">
                                    <Card.Body>
                                        <div className="icon"><FaHashtag /></div>
                                        <h4 className="text-center">Suivez-nous</h4>
                                        <div className="text-center rs-icone g-4">
                                            <Link to="https://facebook.com/" target="_blank"><FaFacebook /></Link>
                                            <Link to="https://instagram.com" target="_blank"><FaSquareInstagram /></Link>
                                            <Link to="https://twitter.com" target="_blank"><FaSquareXTwitter /></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="formulaire">
                        <Row>
                            <Col>
                                <h3>Map</h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5926768281392!2d-4.024184488472116!3d5.326049194630175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebfb043950ef%3A0x94957b7896a87b9f!2sR%C3%A9sidence%20Neuilly!5e0!3m2!1sfr!2sci!4v1701855995933!5m2!1sfr!2sci"
                                    width="100%"
                                    height="450"
                                    style={{ border: '0'}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"/>
                            </Col>
                            <Col className="col-lg-5">
                                <h3>Contact</h3>
                                <form action="">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Nom & prénoms"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Nom & prénoms" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Telephone"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Téléphone" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Envoyer votre message"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                    <div className="d-grid mt-3">
                                        <button>Envoyer</button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>
        </>
    )
}