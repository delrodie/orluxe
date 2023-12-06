import React from 'react';
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {FaLocationDot} from "react-icons/fa6";
import {GrUserWorker} from "react-icons/gr";
import {BsSearch} from "react-icons/bs";
import '../../styles/recherche.scss';

export default function () {
    return(
        <>
            <form action="">
                <Row>
                    <div className="col-12 col-md-6 col-lg-5">
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
                    <Col className="col-12 col-md-6 col-lg-5">
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
                    <Col className="col-12 col-md-12 col-lg-2 d-grid">
                        <button className="btn-recherche"><BsSearch /> Recherche</button>
                    </Col>
                </Row>
            </form>
        </>
    )
}