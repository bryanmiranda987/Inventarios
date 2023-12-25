import React from "react";
import Imagen1 from "../Imagenes/1.jpeg";
import Imagen2 from "../Imagenes/2.png";
import Imagen3 from "../Imagenes/3.jpg";
function carous() {
    const estiloImagen = {
        width: '300px',
        height: '300px',
    };
    return (
        <div className={"container"}>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imagen1} className="d-block w-100" alt="..." style={estiloImagen}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagen2} className="d-block w-100" alt="..." style={estiloImagen}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagen3} className="d-block w-100" alt="..." style={estiloImagen}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}


export default carous;
