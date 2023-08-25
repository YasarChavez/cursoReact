/**
 * Ejemplo de uso del metodo componentWillUnmount para componente de clase
 * y ejemplo de uso de hooks para componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component,useEffect } from 'react'

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }
  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);//Solo una vez
    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}
