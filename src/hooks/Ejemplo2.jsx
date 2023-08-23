/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // Vamos a crear dos contadores distintos
  // Cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * Trabajando con useEffect()
   */
  /**
   * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecutará el snippet de codigo dentro del useEffect()
   */

  // useEffect(() => {
  //     console.log('Cambio en el estado del componente');
  //     console.log('Mostrando referencia a elemento del DOM');
  //     console.log(miRef);
  // });

  /**
   * ? Caso 2: Ejecutar SOLO cuando cambie CONTADOR1
   * En caso que cambie contador2, no habrá ejecución
   */

//   useEffect(() => {
//     console.log("Cambio en el estado del CONTADOR1");
//     console.log("Mostrando referencia a elemento del DOM");
//     console.log(miRef);
//   }, [contador1]);

    /**
   * ? Caso 3: Ejecutar SOLO cuando cambie CONTADOR1 o CONTADOR2
   * En caso que cambie contador1, habrá ejecución
   * En caso que cambie contador2, habrá ejecución
   */

    useEffect(() => {
        console.log("Cambio en el estado del CONTADOR1 o CONTADOR2");
        console.log("Mostrando referencia a elemento del DOM");
        console.log(miRef);
      }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo de useState(),useRef() y useEffect()</h1>
      <h2>CONTADOR 1:{contador1}</h2>
      <h2>CONTADOR 2:{contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
