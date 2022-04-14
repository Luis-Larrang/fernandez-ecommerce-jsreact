import React from 'react';
import "./estios.css"
import logo from "./logo.png"

function NavBar(props) {
    return (
        //NAVBAR BOOTSTRAP
        <>  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo"/>Mercado X</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" target='_blank'>Carnes</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" target='_blank'>Verduras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" target='_blank'>Farmacia</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" target='_blank'>Bebidas</a>
                    </li>            
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>            
            </>
            /*NAVBAR CON CSS
            <div className="nav">
                <img src={logo} alt="logo" height={50} className="logo" />
                <h1 className='nombreEmpresa'>Empresa X</h1>
                <ul className="navSecciones">                
                    <a href="#" className="navSecciones">Carnes</a>
                    <a href="#" className="navSecciones">Verduras</a>
                    <a href="#" className="navSecciones">Farmacia</a>
                    <a href="#" className="navSecciones">Bebidas</a>
                </ul>           
            </div>*/
    );
}

export default NavBar;