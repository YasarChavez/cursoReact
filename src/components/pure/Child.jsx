import React from "react";

const Child = ({ name }) => {
    function pressButton() {
        alert("Default Text");
    }
    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    return (
        <div>
            <p onMouseOver={() => console.log("On mouse Over")}>Child Component</p>
            <button onClick={() => console.log("Boton 1 pulsado")}>Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            {/* SI PASAMOS PARAMETROS PONEMOS DENTRO DE FUNCION ANONIMA PARA QUE NO SE EJECUTEN AL RENDERIZAR */}
            {/* SINO EN EL EVENTO (ONCLICK EN ESTE CASO) */}
            {/* ()=> */}
            <button onClick={() => pressButtonParams("Hello")}>Boton 3</button>
        </div>
    );
};

export default Child;
