//IMPORT
import React from 'react';
import "./navBar.css"
import logo from "./logo.png"
import CartWidget from '../CartWidget/CartWidget';
//FUNCTION
function NavBar(props) {
    return (        
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
                <CartWidget/>
                </div>            
            </div>            
        </nav>                
     </>            
    );
}
//EXPORT
export default NavBar;