import React from 'react';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import Meta from "../components/Meta";
import '../../styles/home.scss';
import ZoneServices from "../components/home/ZoneServices";
import ZoneCarousel from "../components/home/ZoneCarousel";
import ZoneOffres from "../components/home/ZoneOffres";

export default function () {
    return (
        <>
            <Meta
                title="ORLUXE Estate"
                description="ORLUXE Estate, plateforme de gestion des biens immobiliers"
                keywords="ORLUXE, immobilier, terrain, vente, location"
            />
            <main>
                <ZoneCarousel/>
                <ZoneServices/>
                <ZoneOffres/>
            </main>
        </>
    )
}