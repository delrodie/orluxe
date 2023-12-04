import React, {useState} from 'react';
import {Button, Nav, NavDropdown, Offcanvas} from "react-bootstrap";
import {GiHamburgerMenu} from "react-icons/gi";
import Logo from '../../images/logo-bleu.png';
import {Link} from "react-router-dom";

export default function () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="btn-menu" onClick={handleShow}>
                <GiHamburgerMenu/>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={Logo} alt="Logo ORLUXE" className="img-fluid logo"/>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Link to="/" className="nav-link">Accueil</Link>
                        <Link to="presentation" className="nav-link">Qui sommes-nous?</Link>
                        <NavDropdown title="Nos services">
                            <Link to="#" className="dropdown-item">Amenagement de terrain</Link>
                            <Link to="#" className="dropdown-item">Conception et construction de bâtiments</Link>
                            <Link to="#" className="dropdown-item">Promotion immobilière</Link>
                        </NavDropdown>
                        <NavDropdown title="Nos offres">
                            <Link to="#" className="dropdown-item">Abidjan</Link>
                            <Link to="#" className="dropdown-item">Songon</Link>
                            <Link to="#" className="dropdown-item">Yamoussoukro</Link>
                        </NavDropdown>
                        <Link to="#" className="nav-link">Contact</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}