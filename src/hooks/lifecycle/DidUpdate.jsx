/**
 * Ejemplo de uso de metodo componentDidUpdate en componente de clase
 * y uso de hook en comp funcional
 */

import React, { Component,useEffect } from 'react'

export  class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
    }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}



export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
    });//Sin corchetes se ejecuta siempre, cada vez que hay un cambio en estado, props,etc
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
