// Ejemplo de uso del hook useState
// Crear un componente de tipo duncion y acceder a su estado privado a traves de un hook y poder modificarlo

import React, { useState } from "react";

const Ejemplo1 = () => {
    //Valor inicial para un contador
    const valorInicial =0;
    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Yasar',
        email: 'chavezyasar@gmail.com',
    }
    /**Queremos que el valorInicial y personaInicial sean parte del estado del componente para asi poder 
    * gestionar su estado y que este se vea reflejado en la vista del componente
    * const[nombreVariable,funcionCambiar] = useState(valorInicial);
    */
   const [contador, setContador] = useState(valorInicial);
   const [persona, setPersona] = useState(personaInicial);

   /**
    * Funcion para actualizar el estado privado que contiene el contador
    */
   function incrementarContador(){
    // ? funcionParaCambiar(nuevoValor);
        setContador(contador + 1);
   }
    /**
    * Funcion para actualizar el estado de persona en el componente
    */
   function actualizarPersona(){
    setPersona(
        {
            nombre: 'Efrain',
            email: 'yasarchavez@gmail.com'
        }
    );

   }


  return(
    <div>
    <h1>Ejemplo de useState()</h1>
    <h2>CONTADOR: {contador}</h2>
    <h2>DATOS DE LA PERSONA:</h2>
    <h3>NOMBRE: {persona.nombre}</h3>
    <h3>EMAIL: {persona.email}</h3>
    {/* Bloqye de botones para actualizar el estado de los componentes */}
    <button onClick={incrementarContador}>Incrementar Contador</button>
    <button onClick={actualizarPersona}>Actualizar Persona</button>
  </div>
  ) 
};

export default Ejemplo1;
