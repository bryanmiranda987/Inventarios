import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioSolicitud = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [tipo, setTipo] = useState('');
    const [justificacion, setJustificacion] = useState('');

    const tiposDeProducto = ['Matillo', 'Cemento', 'Tejas', 'Metro'];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !cantidad || !tipo || !justificacion) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const solicitudInventario = {
            nombre,
            cantidad: parseInt(cantidad),
            tipo,
            justificacion,
        };


        onSubmit(solicitudInventario);


        setNombre('');
        setCantidad('');
        setTipo('');
        setJustificacion('');
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Nombre del Producto:</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Cantidad:</label>
                <input
                    type="number"
                    className="form-control"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Tipo de Producto:</label>
                <select
                    className="form-select"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="" disabled>Selecciona un tipo</option>
                    {tiposDeProducto.map((tipo, index) => (
                        <option key={index} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Justificación:</label>
                <textarea
                    className="form-control"
                    value={justificacion}
                    onChange={(e) => setJustificacion(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar Solicitud</button>
        </form>
    );
};

export default FormularioSolicitud;