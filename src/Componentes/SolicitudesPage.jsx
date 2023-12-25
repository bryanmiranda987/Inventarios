import React, { useState } from 'react';
import FormularioSolicitud from './FormularioSolicitud';

function Solicitud() {
    const [solicitudes, setSolicitudes] = useState([]);

    const handleSolicitudSubmit = (nuevaSolicitud) => {
        setSolicitudes([...solicitudes, nuevaSolicitud]);
    };
    return (
        <div>
            <h1>Formulario de Solicitud de Inventario</h1>
            <FormularioSolicitud onSubmit={handleSolicitudSubmit}/>
            {solicitudes.length > 0 && (
                <div className={'container'}>
                    <h2>Solicitudes de Inventario:</h2>
                    <ul>
                        {solicitudes.map((solicitud, index) => (
                            <li key={index}>
                                {`Nombre: ${solicitud.nombre}, Cantidad: ${solicitud.cantidad}, Tipo: ${solicitud.tipo}, Justificación: ${solicitud.justificacion}`}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {solicitudes.length === 0 && <p>No hay solicitudes de inventario.</p>}
        </div>
    );
}


export default Solicitud;