import React from "react";
import Child from "../pure/Child";

const Father = () => {
    function showMessage(text) {
        alert(`Message received: ${text}`);
    }

    return (
        <div>
            <Child name="Yasar" send={showMessage} />
        </div>
    );
};

export default Father;
