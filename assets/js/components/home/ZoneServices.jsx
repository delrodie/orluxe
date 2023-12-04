import React from "react";
import service1 from '../../../images/icones/01-amenagement.png';
import service2 from '../../../images/icones/02-conception.png';
import service3 from '../../../images/icones/03-remise.png';
import {Col, Container, Row} from "react-bootstrap";

export default function () {
    return(
        <>
            <section id="zoneServices">
                <Container>
                    <Row>
                        <Col className="text-center introduction">
                            <h5>Nos services</h5>
                            <h4 className="titre">
                                Découvrez nos services immobiliers
                            </h4>
                            <p>
                                Notre engagement envers la qualité et la satisfaction client fait de nous le choix idéal pour concrétiser vos projets. Découvrez comment nos services exceptionnels peuvent répondre à vos besoins spécifiques :
                            </p>
                        </Col>
                    </Row>
                    <Row className="row-cols-1 row-cols-sm-1 row-cols-md-3 services">
                        <Col className="text-center">
                            <img src={service1} className="img-fluid" alt="Amenagement de terrains"/>
                            <h6><span>1.</span> Aménagement de terrains</h6>
                            <p>
                                Transformez vos espaces avec notre expertise en aménagement de terrains.
                                Que ce soit pour des projets résidentiels, commerciaux ou industriels, nous sommes là pour donner vie à vos idées.
                            </p>
                        </Col>
                        <Col className="text-center">
                            <img src={service2} alt="" className="img-fluid"/>
                            <h6><span>2.</span> Conception et construction de bâtiments</h6>
                            <p>
                                De la planification à la réalisation, notre équipe de professionnels expérimentés vous accompagne dans la conception et la construction de bâtiments de qualité supérieure.
                                Nous mettons l'accent sur l'efficacité, la durabilité et le design novateur.
                            </p>
                        </Col>
                        <Col className="text-center">
                            <img src={service3} alt="" className="img-fluid"/>
                            <h6><span>3.</span> Promotion immobilière</h6>
                            <p>
                                Explorez de nouvelles opportunités avec notre service de promotion immobilière. Que vous soyez un investisseur cherchant des projets attractifs ou un futur propriétaire à la recherche de la maison de vos rêves, nous sommes là pour vous guider à chaque étape.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}