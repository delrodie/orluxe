import React, {useEffect, useState} from 'react';
import {Button, Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {PiSignInBold} from "react-icons/pi";
import logo from '../../images/logo-bleu.png'
import {Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

export default function () {
    const [isTop, setIsTop] = useState(true);
    const [isMenuFixed, setIsMenuFixed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsTop(false);
                setIsMenuFixed(true);
            } else {
                setIsTop(true);
                setIsMenuFixed(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isServiceOpen, setIsServiceOpen] = useState(false)
    const handleServiceOpenToggle = () => {
        setIsServiceOpen(!isServiceOpen);
    }

    const [isOffreOpen, setIsOffreOpen] = useState(false)
    const handleOffreOpenToggle = () => {
        setIsOffreOpen(!isOffreOpen);
    }

    return (
        <secteur id="menu" className={isMenuFixed ? 'fixed': 'relative'}>
            <div className="menu">
                <div className={isMenuFixed ? "menu-container" : "container"}>
                    <Navbar expand="lg">
                        <Container data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration={2000}>
                            <Navbar.Brand href="#home" className={isTop ? 'masque' : ''}>
                                <img src={logo} alt="logo ORLUXE" className="img-fluid logo"/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto menu-nav" style={{ width: "80%"}}>
                                    <Link to="/" className="nav-link">Accueil</Link>
                                    <Link to="/presentation" className="nav-link">Qui sommes-nous?</Link>
                                    <NavDropdown
                                        title="Nos services"
                                        show={isServiceOpen}
                                        onMouseEnter={handleServiceOpenToggle}
                                        onMouseLeave={handleServiceOpenToggle}
                                    >
                                        <Link to="/services/amenagement-de-terrain" className="dropdown-item">Amenagement de terrain</Link>
                                        <Link to="/services/conception-et-constructtion-de-batiment" className="dropdown-item">Conception et construction de bâtiments</Link>
                                        <Link to="/services/promotion-immobiliere" className="dropdown-item">Promotion immobilière</Link>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Nos offres"
                                        show={isOffreOpen}
                                        onMouseEnter={handleOffreOpenToggle}
                                        onMouseLeave={handleOffreOpenToggle}
                                    >
                                        <Link to="/nos-offres/abidjan" className="dropdown-item">Abidjan</Link>
                                        <Link to="/nos-offres/songon" className="dropdown-item">Songon</Link>
                                        <Link to="/nos-offres/yamoussoukro" className="dropdown-item">Yamoussoukro</Link>
                                    </NavDropdown>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </Nav>
                                <Nav>
                                    <Link to="/recherche">
                                        <Button className="btn-menu">
                                            <BsSearch /> <span>RECHERCHE</span>
                                        </Button>
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </secteur>
    )
}