import React from 'react';
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import card1 from '../../images/gallerie/ter01.jpg';
import card2 from '../../images/gallerie/ter02.jpg';
import card3 from '../../images/gallerie/ter03.jpg';
import card4 from '../../images/gallerie/vil01.jpg';
import card5 from '../../images/gallerie/vil02.jpg';
import card6 from '../../images/gallerie/vil03.jpg';
import card7 from '../../images/gallerie/ter03.jpg';
import card8 from '../../images/gallerie/ter02.jpg';
import card9 from '../../images/gallerie/vil03.jpg';
import card10 from '../../images/gallerie/ter03.jpg';
import card11 from '../../images/gallerie/ter02.jpg';
import card12 from '../../images/gallerie/ter02.jpg';
import {Link} from "react-router-dom";
import '../../styles/offre.scss';

// Externalisation des données
const offresData = [
    { image: card1, title: 'Titre de l\'offre 1', description: 'Conception de plan de batiment 360°' },
    { image: card2, title: 'Titre de l\'ffre 2', description: 'Amenagement de terrains' },
    { image: card3, title: 'Titre de l\'offre 3', description: 'Amenagement de terrains' },
    { image: card4, title: 'Titre de l\'offre 4', description: 'Construction de maison' },
    { image: card5, title: 'Titre de l\'offre 5', description: 'Appartement fimillial' },
    { image: card6, title: 'Titre de l\'offre 6', description: 'Pomotion immobilière' },
    { image: card7, title: 'Titre de l\'offre 7', description: 'Amenagement de terrains' },
    { image: card8, title: 'Titre de l\'offre 8', description: 'Plan de batiment ' },
    { image: card12, title: 'Titre de l\'offre 9', description: 'Plan de batiment ' },
    { image: card10, title: 'Titre de l\'offre 10', description: 'Plan de batiment ' },
    { image: card9, title: 'Titre de l\'offre 11', description: 'Plan de batiment ' },
    { image: card11, title: 'Titre de l\'offre 12', description: 'Plan de batiment ' },
];

// Composant de carte réutilisable
const OffreCard = ({ offre }) => (
    <Link to="/offre">
        <Col className="h-100" data-aos="fade-up" data-aos-duration={2000} data-aos-easing="ease-in-out">
            <Card className="h-100">
                <Card.Img variant="top" src={offre.image} />
                <Card.Body>
                    <Card.Title>{offre.title}</Card.Title>
                    {offre.description && <Card.Text>{offre.description}</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    </Link>
);

export default function () {

    return (
        <>
            <section id="zoneOffres">
                <Container>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 offres">
                        {offresData.map((offre, index) => (
                            <OffreCard key={index} offre={offre} />
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}