import React from 'react';

const TablaComponent = ({ datos }) => {
    return (
        <table className={'table table-striped table-hover table-bordered'}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantida</th>
                <th>Valor</th>
            </tr>
            </thead>
            <tbody>
            {datos.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.valor}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TablaComponent;