/**
 * Ejemplo para entende el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de CHILDREN PROPS</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* Props.children pintara por defecto
            aquello que se encuentre entre las etiquetas de apertura yuy cierre de este componente
            desde el comp. de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
