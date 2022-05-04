//IMPORT
import React from 'react';
import "./navBar.css"
import logo from "./logo.png"
import CartWidget from '../CartWidget/CartWidget';
import {Navbar, Container, Nav} from "react-bootstrap"
import {NavLink,Link} from 'react-router-dom'
//FUNCTION
function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/"><img src={logo} alt="logo"/>{' '}Mercado X</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/category/Monitores" className={nav=> nav.isActive ? "nav-active" : "" }>Monitores</NavLink>
                    <NavLink to="/category/Computadoras" className={nav=> nav.isActive ? "nav-active" : ""}>Computadoras</NavLink>
                    <NavLink to="/category/Accesorios" className={nav=> nav.isActive ? "nav-active" : ""}>Accesorios</NavLink>
                </Nav>
                <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        //TRABAJANDO CON BOOTSTRAP ME QUEDABA BIEN ESTETICAMENTE PERO CUANDO PASE A REACT-DOM NO CONSIGO HACER QUE ME RECONOZCA NADA DEL CSS, INTENTE REPICAR COMO LO ARMO EL PROFE A VERI SI ASI FUNCIONABA PERO NO HAY CASO. 
        /*
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="logo"/>{' '}Mercado X</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/category/Monitores" className={nav=> nav.isActive ? "nav-active" : ""}>Monitores</Nav.Link>
                    <Nav.Link href="/category/Computadoras" className={nav=> nav.isActive ? "nav-active" : ""}>Computadoras</Nav.Link>
                    <Nav.Link href="/category/Accesorios" className={nav=> nav.isActive ? "nav-active" : ""}>Accesorios</Nav.Link>
                </Nav>
                <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/                
    );
}
//EXPORT
export default NavBar;