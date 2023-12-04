import React from 'react';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {FaLocationDot} from "react-icons/fa6";
import {GrUserWorker} from "react-icons/gr";
import slide1 from "../../../images/slide/01.jpg";
import slide2 from "../../../images/slide/03.jpg";

export default function () {
    return (
        <>
            <section id="zoneCarousel">
                <Container>
                    <Row className="row-cols-sm-1 row-cols-lg-2">
                        <Col className="col-sm-12 search" data-aos="fade-left" data-aos-duration={2000} data-aos-easing="ease-in-out">
                            <h1><span>O</span>RLUXE <span>E</span>state</h1>
                            <h4>Construire l'avenir ensemble</h4>
                            <p>

                                Bienvenue chez <strong>ORLUXE ESTATE</strong> à Abidjan, Côte d'Ivoire, où l'excellence rencontre l'innovation dans le domaine de l'aménagement,
                                de la construction et de la promotion immobilière. Notre engagement envers la qualité et la satisfaction client fait de nous le choix idéal pour concrétiser vos projets.
                            </p>
                            <form action="">
                                <Row className="row-cols-sm-1 row-cols-md-2">
                                    <div className="col-12">
                                        <FloatingLabel
                                            label={<>{<FaLocationDot/>} {"Localisation"}</>}
                                            controlId="localisation"
                                        >
                                            <Form.Select>
                                                <option> -- Selectionner la zone --</option>
                                                <option></option>
                                                <option value="ABIDJAN">Abidjan</option>
                                                <option value="SONGON">Songon</option>
                                                <option value="YAMOUSOUKRO">Yamoussoukro</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </div>
                                    <Col className="col-sm-12">
                                        <FloatingLabel
                                            label={<>{<GrUserWorker/>} {"Services"}</>}
                                            controlId="localisation"
                                        >
                                            <Form.Select>
                                                <option> -- Selectionner le service --</option>
                                                <option></option>
                                                <option value="AMENAGEMENT">Aménagement de terrains</option>
                                                <option value="SONGON">Conception et construction de bâtiments</option>
                                                <option value="YAMOUSOUKRO">Promotion immobilière</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col className="slides" data-aos="fade-right" data-aos-duration={2000} data-aos-easing="ease-in-out">
                            <img src={slide1} alt="slide 1" className="slide1"/>
                            <img src={slide2} alt="slide 1" className="slide2"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}