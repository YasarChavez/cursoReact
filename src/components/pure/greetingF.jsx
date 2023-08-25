import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  // Use state
  // const [variable a modificar, metodo para actualizarla] = useState(valor inicial);
  const [age, setage] = useState(29);

  const birthday = () => {
    //Actualizar el state
    setage(age + 1);
  };
  const quitarAnios=()=>{
    setage(age-1);
  }

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional</h1>
      <h2>Tu edad es: {age}</h2>
      {/* Llamamos al metodo */}
      <button onClick={birthday}>Cumplir Años</button>
      <button onClick={quitarAnios}>Quitar Años</button>
      {/* <button onMouseOver={quitarAnios}>Quitar Años</button> */}
      
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
