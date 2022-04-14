import React from 'react';
import "./estios.css"
import "./logo.png"

function NavBar(props) {
    return (
        <div className="nav">
            <img src="logo.png" alt="logo" />
            <h1>Empresa X</h1>
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