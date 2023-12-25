import React , { useState } from 'react';
import FormularioInventario from './FormularioInventario';
function EnviarCorreoForm() {
    const listaDeDatosOriginal  = [
        { id: 1, nombre: 'Martillo',cantidad:'2', valor:'$400'},
        { id: 2, nombre: 'Cemento',cantidad:'4',  valor:'$300'},
        { id: 3, nombre: 'Tejas',cantidad:'5', valor:'$800'},
        { id: 4, nombre: 'Metro',cantidad:'8',  valor:'$200'},
    ];
    const [listaDeDatos, setListaDeDatos] = useState(listaDeDatosOriginal);

    const handleSubmit = (nuevoInventario) => {
        // Agregar el nuevo inventario a la lista existente
        setListaDeDatos([...listaDeDatos, nuevoInventario]);
    };
    return (
        <div>
            <h1>Formulario de Envio Pedidos</h1>
            <FormularioInventario onSubmit={handleSubmit}/>
        </div>
    );
}


export default EnviarCorreoForm;