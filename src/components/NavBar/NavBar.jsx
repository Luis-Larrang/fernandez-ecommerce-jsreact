import React from 'react';
import "./estios.css"
import logo from "./logo.png"

function NavBar(props) {
    return (
        //NAVBAR BOOTSTRAP
        <>  
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="logo"/>Mercado X</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Carnes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Verduras</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Farmacia</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Bebidas</a>
                    </li>            
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
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