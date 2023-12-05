import React from 'react';
import Meta from "../components/Meta";
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {IoHome} from "react-icons/io5";
import '../../styles/presentation.scss';
import {AiOutlineLine} from "react-icons/ai";
import logo from '../../images/logo-bleu.png';
import slide1 from '../../images/slide/img03.jpg';
import slide2 from '../../images/slide/img02.jpg';
import {GiCheckMark} from "react-icons/gi";
import {FaRegCalendarAlt} from "react-icons/fa";

export default function () {
    return (
        <>
            <Meta
                title="Présentation d'ORLUXE Estate"
                description="ORLUXE Estate, plateforme de gestion des biens immobiliers"
                keywords="ORLUXE, immobilier, terrain, vente, location"
            />

            <main>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"><IoHome /></Breadcrumb.Item>
                        {/*<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">*/}
                        {/*    Library*/}
                        {/*</Breadcrumb.Item>*/}
                        <Breadcrumb.Item active>Qui sommes-nous?</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row className="page">
                        <Col className="col-12 col-lg-7">
                            <Row className="d-flex justify-content-center align-content-center align-items-center">
                                <Col data-aos="fade-right" data-aos-duration={2000} data-aos-easing="ease-in-out">
                                    <img src={slide2} alt="" className="img-fluid illustration"/>
                                </Col>
                                <Col>
                                    <Row className="g-4">
                                        <Col className="col-12" data-aos="zoom-in" data-aos-duration={2000} data-aos-easing="ease-in-out">
                                            <img src={logo} alt="" className="img-fluid"/>
                                        </Col>
                                        <Col className="col-12" data-aos="fade-up" data-aos-duration={2000} data-aos-easing="ease-in-out">
                                            <img src={slide1} alt="" className="img-fluid illustration"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-12 col-lg-5 contenu" data-aos="zoom-out" data-aos-duration={2000} data-aos-easing="ease-in-out">
                            <h6 className="titre-page"><AiOutlineLine /> Qui sommes-nous? </h6>
                            <h4 className="slogan">Construire l'avenir ensemble (slogan)</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae est maiores quidem velit. Adipisci deleniti error minus necessitatibus, nihil nisi possimus quibusdam quidem tempore totam vel velit vero voluptatibus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officia porro quod rerum suscipit. Aliquid blanditiis eius, exercitationem facere ipsa iste magnam molestiae nostrum, numquam quibusdam recusandae ut vitae voluptas.
                            </p>
                            <ul>
                                <li><GiCheckMark /> Aménagement</li>
                                <li><GiCheckMark /> Vente de terrain</li>
                                <li><GiCheckMark /> Construction immobilière</li>
                                <li><GiCheckMark /> Agent immobilier au compte de tiers</li>
                                <li><GiCheckMark /> Agrement pour agent immobilier</li>
                                <li><GiCheckMark /> Recherche de financement des PME et particuliers</li>
                            </ul>
                            <div className="d-grid rdv">
                                <button className="btn-rdv"><FaRegCalendarAlt />    Rendez-vous</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}