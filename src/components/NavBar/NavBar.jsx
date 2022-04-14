import React from 'react';
import "./estios.css"
import logo from "./logo.png"

function NavBar(props) {
    return (
        <div className="nav">
            <img src={logo} alt="logo" height={50} className="logo" />
            <h1 className='nombreEmpresa'>Empresa X</h1>
            <ul className="navSecciones">                
                <a href="#" className="navSecciones">Carnes</a>
                <a href="#" className="navSecciones">Verduras</a>
                <a href="#" className="navSecciones">Farmacia</a>
                <a href="#" className="navSecciones">Bebidas</a>
            </ul>           
        </div>
    );
}

export default NavBar;