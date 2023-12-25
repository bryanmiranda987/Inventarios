import React , { useState } from 'react';
import TablaComponent from './TablaComponente';
function useInventario() {
    const listaDeDatosOriginal  = [
        { id: 1, nombre: 'Martillo',cantidad:'2', valor:'$400'},
        { id: 2, nombre: 'Cemento',cantidad:'4',  valor:'$300'},
        { id: 3, nombre: 'Tejas',cantidad:'5', valor:'$800'},
        { id: 4, nombre: 'Metro',cantidad:'8',  valor:'$200'},
    ];

    const [listaDeDatos, setListaDeDatos] = useState(listaDeDatosOriginal);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    const filtrarDatos = () => {
        const datosFiltrados = listaDeDatosOriginal.filter((item) =>
            item.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        setListaDeDatos(datosFiltrados);
    };

    const handleBusquedaChange = (e) => {
        setTerminoBusqueda(e.target.value);
        filtrarDatos();
    };

    return (
        <div className={'container'}>
            <h1>Inventario Actual</h1>
            <input className={'form-control'}
                type="text"
                placeholder="Buscar por nombre..."
                value={terminoBusqueda}
                onChange={handleBusquedaChange}
            />
            <TablaComponent datos={listaDeDatos}/>
        </div>
    );
}


export default useInventario;