import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className={"navbar  navbar-expand-lg bg-body-tertiary"}>
            <div className={"container-fluid"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to="/inventario">Inventario</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to="/enviosPage">Envios</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to="/solicitudes">Solicitudes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;