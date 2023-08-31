import React, { useRef } from "react";

const Child = ({ name, send }) => {
    const messageRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in input ${text}`);
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
            <input 
            ref={messageRef} 
            placeholder="Insert a text" 
            onFocus={() => console.log("Input Focused")} 
            onChange={(e) => console.log("Input Changed", e.target.value)} 
            onCopy={() => console.log("Copied text from input")}
            // onCopy={() => {messageRef.current.value='No se copia nene!',console.log('salio')}}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
        </div>
    );
};

export default Child;
