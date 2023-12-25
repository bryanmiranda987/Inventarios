import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioInventario = ({ onSubmit }) => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [asunto, setAsunto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');

    const tiposDeProducto = ['Matillo', 'Cemento', 'Tejas', 'Metro'];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id || !nombre || !mensaje || !asunto || !cantidad || !tipo || !valor) {
            alert('Por favor, completa todos los campos.');
            return;
        }


        const nuevoInventario = {
            id: parseInt(id),
            nombre,
            mensaje,
            asunto,
            cantidad: parseInt(cantidad),
            tipo,
            valor: parseFloat(valor),
        };


        onSubmit(nuevoInventario);

        setId('');
        setNombre('');
        setMensaje('');
        setAsunto('');
        setCantidad('');
        setTipo('');
        setValor('');
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">ID:</label>
                <input
                    type="number"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Mensaje:</label>
                <textarea
                    className="form-control"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Asunto:</label>
                <input
                    type="text"
                    className="form-control"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
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
                <label className="form-label">Valor:</label>
                <input
                    type="number"
                    className="form-control"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default FormularioInventario;