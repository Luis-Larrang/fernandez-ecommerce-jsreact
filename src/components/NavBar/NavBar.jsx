import React from 'react';
import "./navBar.css";
import logo from "../../Assets/logo.png";
import CartWidget from '../CartWidget/CartWidget';
import {NavLink,Link} from 'react-router-dom';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img src={logo} alt="Logo mercado x" className='logo' />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/category/Monitores' className={nav => nav.isActive ? 'nav-active' : ''}>Monitores</NavLink></li>
                <li><NavLink to='/category/Computadoras' className={nav => nav.isActive ? 'nav-active' : ''}>Computadoras</NavLink></li>
                <li><NavLink to='/category/Accesorios' className={nav => nav.isActive ? 'nav-active' : ''}>Accesorios</NavLink></li>
            </ul>
            <div className='carrito'>
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar;