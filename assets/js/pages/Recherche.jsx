import React from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import Meta from "../components/Meta";
import {IoHome} from "react-icons/io5";
import FormulaireRecherche from "../components/FormulaireRecherche";
import '../../styles/recherche.scss'
import ZoneOffres from "../components/home/ZoneOffres";
import Offres from "../components/Offres";

export default function () {
    return (
        <>
            <Meta
                title="Rechercher"
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
                        <Breadcrumb.Item active>Recherche</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="recherche">
                        <FormulaireRecherche/>
                        <Offres/>
                    </div>
                </Container>
            </main>
        </>
    )
}